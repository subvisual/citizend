'use server';

import { createClient } from './supabase/server';

// get wallets that participated in the first community sale
export const extraAllocation = async (address: string) => {
  const supabase = createClient();

  const { error, data } = await supabase
    .from('extra_allocation')
    .select('address')
    .ilike('address', `%${address}%`);

  if (error) {
    console.error(error);
    return { error: error.message };
  }

  return data?.length && data.length > 0 ? true : false;
};
