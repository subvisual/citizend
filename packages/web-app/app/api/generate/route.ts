import { generateMerkleRoot } from '@/app/_server/projects/generate-merkle-root';

export const revalidate = 0;

export async function GET(_request: Request) {
  // if (process.env.NEXT_PUBLIC_ENABLE_TESTNETS !== 'true') {
  //   return new Response('Not found', { status: 404 });
  // }

  const root = await generateMerkleRoot();

  if (typeof root === 'object' && 'error' in root) {
    return new Response(`Generate root error: ${root.error}`, {
      status: 500,
    });
  }

  return Response.json(root);
}
