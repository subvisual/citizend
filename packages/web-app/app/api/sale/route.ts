import { saleDetails } from '@/app/_server/sales';

export async function GET(_request: Request) {
  const details = await saleDetails();

  return Response.json(details);
}
