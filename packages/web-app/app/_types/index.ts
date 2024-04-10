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
  project: string;
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
  minContribution: bigint;
  maxContribution: bigint;
  totalTokensForSale: bigint;
};
