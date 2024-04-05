'use client';

import { useState, useEffect } from 'react';
import { useReadProjectDescription } from '@/wagmi.generated';
import Image from 'next/image';

export const ProjectDescription = () => {
  const [isSSR, setIsSSR] = useState(true);
  const { data, isLoading } = useReadProjectDescription();

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR || isLoading) return <p className="load">Loading...</p>;

  return (
    <div className="max-w-2xl max-w-prose text-mono-50">
      <Image
        src="/citizend-logo-circle.svg"
        alt="Citizend Logo"
        width={80}
        height={80}
        priority
      />
      <h2 className="mt-6">Citizend Community Sale</h2>
      <p className="pt-2">
        The community-curated token launch platform of web3.
      </p>
      <p>{data}</p>
      <div className="my-8 border-t border-mono-400" />
      <h3 className="mb-8">Description</h3>
      <p className="text-mono-400">
        Citizend provides a community-curated filter mechanism able to identify
        high-quality projects, and aligning incentives between projects and web3
        users.
      </p>
      <br />
      <p className="text-mono-400">
        Projects hoping to distribute tokens on citizend must garner the
        greatest number of votes from the community to win a slot, with each
        member of the community being able to cast only one vote, among multiple
        competing projects in each batch. To do so, projects must convince the
        community of their worth, as community members only receive allocations
        if their chosen project is elected, they are incentivized to research
        and select the projects with the highest potential.
      </p>
      <h3 className="my-8">Key partners</h3>
      <p className="text-mono-400">
        Citizend is brought to you by Fractal ID and Outlier Ventures, with
        additional supporting partners like Subvisual and Unique Network. We aim
        to build a token funding platform that complies with all regulatory
        standards, while we ensure people are in control of their data. We walk
        the talk by progressively decentralizing the project from the start and
        allowing everyone to participate.
      </p>
    </div>
  );
};
