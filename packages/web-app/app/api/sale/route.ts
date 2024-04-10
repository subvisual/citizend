import { saleDetails } from '@/app/_server/sales';

declare global {
  interface BigInt {
    toJSON: () => string;
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};

export async function GET(_request: Request) {
  const details = await saleDetails();

  if (typeof details === 'object' && details instanceof Error) {
    return new Response(`Sales details error: ${details.message}`, {
      status: 500,
    });
  }

  return Response.json(details);
}
