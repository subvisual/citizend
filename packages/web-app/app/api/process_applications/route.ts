import { updateAllowedProjectApplicants } from '@/app/_server/idos';
import { projectsInfo } from '@/app/_server/projects/project-info';
import { createClient } from '@/app/_server/supabase/server';

export const revalidate = 0;

const persistData = async (data: string[]) => {
  const supabase = createClient();

  const rows = data.map((address: string) => {
    return { project: projectsInfo.citizend.address, address };
  });

  const { error, count } = await supabase
    .from('applications')
    .upsert(rows)
    .select();

  if (error) {
    return new Response(`Insert applications list: ${error.message}`, {
      status: 500,
    });
  }

  return count;
};

export async function GET(_request: Request) {
  if (process.env.NEXT_PUBLIC_ENABLE_TESTNETS !== 'true') {
    return new Response('Not found', { status: 404 });
  }

  // fire get all allowed project applicants but don't wait for the result
  const result = await updateAllowedProjectApplicants(
    projectsInfo.citizend.address,
  );

  if (typeof result === 'object' && 'error' in result) {
    return new Response(`Generate applications list: ${result.error}`, {
      status: 500,
    });
  }

  if (result.length === 0) {
    return new Response('No new applications found', {
      status: 200,
    });
  }

  // insert record into applications table
  const count = await persistData(result);

  return Response.json('data inserted successfully: ' + count);
}
