'use server';

import { createClient } from './supabase/server';

// check if user is allowed to contribute
export const canContribute = async (project: string, address: string) => {
  const supabase = createClient();

  const { error, count } = await supabase
    .from('applications')
    .select('*')
    .eq('project', project)
    .eq('address', address);

  if (error) {
    console.error(error);
    return { error: error.message };
  }

  return count && count > 0 ? true : false;
};
