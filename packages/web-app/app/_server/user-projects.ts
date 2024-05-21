'use server';

import { createClient } from './supabase/server';

// get projects where the user is allowed to contribute
export const userProjects = async (address: string) => {
  const supabase = createClient();

  const { error, data } = await supabase
    .from('applications')
    .select('project')
    .ilike('address', `%${address}%`);

  if (error) {
    console.error(error);
    return { error: error.message };
  }

  return data.map((project: { project: string }) => project.project);
};
