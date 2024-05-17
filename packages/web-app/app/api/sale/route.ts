import { saleDetails } from '@/app/_server/sales';
import { formatEther } from 'viem';

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
      status: 'Apply Now',
      minTarget: formatEther(project.minTarget),
      maxTarget: formatEther(project.maxTarget),
    };
  });

  const host = process.env.NEXT_PUBLIC_DAPP_HOST;

  const extendedWithTBA = [
    ...tempDetails,
    {
      address: 'TBA',
      publicKey: 'TBA',
      project: 'The Posemesh (AUKI)',
      description:
        'The DePIN for AI Perception. The posemesh is a decentralized machine perception network for the next 100 billion people, devices and AI.',
      status: 'upcoming',
      rate: 'TBA',
      minTarget: 'TBA',
      maxTarget: 'TBA',
      start: 'TBA',
      end: 'TBA',
      minContribution: 'TBA',
      maxContribution: 'TBA',
      totalTokensForSale: 'TBA',
      startRegistration: 'TBA',
      endRegistration: 'TBA',
      url: 'TBA',
      logo: `${host}/auki-logo.png`,
      background: `${host}/auki-card-background.png`,
      backgroundMobile: `${host}/auki-card-background.png`,
      supplyPercentage: 'TBA',
      currentPrice: 'TBA',
    },
  ];

  return Response.json(extendedWithTBA);
}
