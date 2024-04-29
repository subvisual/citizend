import { saleDetails } from '@/app/_server/sales';

declare global {
  interface BigInt {
    toJSON: () => string;
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};

export const dynamic = 'force-static';

export async function GET(_request: Request) {
  const details = await saleDetails();

  if (typeof details === 'object' && 'error' in details) {
    return new Response(`Sales details error: ${details.error}`, {
      status: 500,
    });
  }

  const tempDetails = details.map((project) => {
    return {
      ...project,
      status: 'Coming soon',
      start: 1715947200 * 1000,
      end: 1716033600 * 1000,
      startRegistration: 1715342400 * 1000,
      endRegistration: 1715860800 * 1000,
      minTarget: 500000,
      maxTarget: 1000000,
    };
  });

  return Response.json(tempDetails);
}
