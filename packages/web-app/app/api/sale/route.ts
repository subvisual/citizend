import { saleDetails } from '@/app/_server/sales';
import { formatUnits } from 'viem';

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
      minTarget: formatUnits(project.minTarget, 6),
      maxTarget: formatUnits(project.maxTarget, 6),
      status: "completed",
    };
  });

  return Response.json(tempDetails);
}
