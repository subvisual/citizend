import { generateMerkleRoot } from '@/app/_server/projects/generate-merkle-root';

export const dynamic = 'force-static';

export async function GET(_request: Request) {
  const root = await generateMerkleRoot();

  if (typeof root === 'object' && 'error' in root) {
    return new Response(`Generate root error: ${root.error}`, {
      status: 500,
    });
  }

  return Response.json(root);
}
