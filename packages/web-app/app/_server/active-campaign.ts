'use server';
import { z } from 'zod';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    'Api-Token': process.env.NEXT_ACTIVE_CAMPAIGN_API_KEY,
  },
};

const createContact = async (email: string) => {
  const parsedEmail = z.string().safeParse(email);

  if (!parsedEmail.success) {
    return {
      error: 'Invalid email',
    };
  }

  const validEmail = parsedEmail.data;

  try {
    const response = await fetch(
      `https://${process.env.NEXT_ACTIVE_CAMPAIGN_ACCOUNT_NAME}.api-us1.com/api/3/contacts`,
      {
        ...options,
        body: JSON.stringify({ contact: { email: validEmail } }),
      },
    );

    const result = await response.json();
    const contactId = result?.contact?.id;

    const contactIdParsed = z.string().safeParse(contactId);

    if (!contactId || !contactIdParsed.success) {
      return { error: 'Failed to create contact' };
    }

    return contactIdParsed.data;
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      console.error(error.message);
      return { error: error.message };
    }

    return { error: 'Failed to add to mailing list' };
  }
};

const updateListState = async (contactId: string) => {
  const parsedContactId = z.string().safeParse(contactId);

  if (!parsedContactId.success) {
    return {
      error: 'Invalid contact id',
    };
  }

  const validContact = parsedContactId.data;

  try {
    const response = await fetch(
      `https://${process.env.NEXT_ACTIVE_CAMPAIGN_ACCOUNT_NAME}.api-us1.com/api/3/contactLists`,
      {
        ...options,
        body: JSON.stringify({
          contactList: {
            list: '39',
            status: '1',
            contact: validContact,
            sourceid: 0,
          },
        }),
      },
    );

    if (response.status === 201) {
      return { success: 'Contact added to mailing list' };
    }

    return { error: 'Failed to add to mailing list' };
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      console.error(error.message);
      return { error: error.message };
    }

    return { error: 'Failed to add to mailing list' };
  }
};

export const subscribeToNewsletter = async (email: string) => {
  const contactId = await createContact(email);

  if (typeof contactId === 'object' && 'error' in contactId) {
    return contactId;
  }

  return updateListState(contactId);
};
