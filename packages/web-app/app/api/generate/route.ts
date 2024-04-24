export async function GET(_request: Request) {
  // const root = await generateMerkleRoot();
  //
  // if (typeof root === 'object' && 'error' in root) {
  //   return new Response(`Generate root error: ${root.error}`, {
  //     status: 500,
  //   });
  // }
  //
  // return Response.json(root);

  return new Response('root');
}
