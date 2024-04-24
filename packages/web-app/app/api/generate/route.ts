import { generateMerkleRoot } from '@/app/_server/projects/generate-merkle-root';

export const dynamic = 'force-static';

export async function GET(_request: Request) {
  const root = await generateMerkleRoot();
  return Response.json(root);
}
