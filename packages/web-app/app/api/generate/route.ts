import { generateMerkleRoot } from '@/app/_server/projects/generate-merkle-root';

export const revalidate = 0;

export async function GET(_request: Request) {
  const result = await generateMerkleRoot();

  if (typeof result === 'object' && 'error' in result) {
    return new Response(`Generate root error: ${result.error}`, {
      status: 500,
    });
  }

  return Response.json(result?.root);
}
