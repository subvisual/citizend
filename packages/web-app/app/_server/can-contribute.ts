'use server';

import { createClient } from './supabase/server';

// check if user is allowed to contribute
export const canContribute = async (project: string, address: string) => {
  const supabase = createClient();

  const { error, data } = await supabase
    .from('applications')
    .select('*')
    .eq('project', project)
    .ilike('address', `%${address}%`);

  if (error) {
    console.error(error);
    return { error: error.message };
  }

  return data?.length && data.length > 0 ? true : false;
};
