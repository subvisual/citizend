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

  return Response.json(details);
}
