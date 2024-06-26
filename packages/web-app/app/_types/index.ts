import type { ReactNode } from 'react';

export type TChildren = {
  children: ReactNode;
};

export type Project = {
  id: number;
  project: string;
  targetedRaise: number;
  supplySold: number;
  urlId?: string;
  endDate: Date;
  startDate: Date;
};

export type TClassNameProps = {
  className?: string;
};

export type TProjectStatus = 'completed' | 'upcoming' | 'live';

export type TProjectSaleDetails = {
  address: string;
  publicKey: string;
  project: string;
  description: string;
  status: TProjectStatus;
  url: string;
  logo: string;
  background: string;
  backgroundMobile: string;
  rate: bigint;
  minTarget: bigint;
  maxTarget: bigint;
  start: bigint;
  end: bigint;
  minContribution: string;
  maxContribution: string;
  minTokensForSale: string;
  maxTokensForSale: string;
  startRegistration: bigint;
  endRegistration: bigint;
  supplyPercentage: string;
  currentPrice: number;
};
