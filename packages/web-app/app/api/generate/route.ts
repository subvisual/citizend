import { generateMerkleRoot } from '@/app/_server/projects/generate-merkle-root';

export async function GET(_request: Request) {
  const root = await generateMerkleRoot();
  return new Response(root.toString());
}
