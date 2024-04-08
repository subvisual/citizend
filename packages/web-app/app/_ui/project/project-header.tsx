// import { useReadProjectDescription } from '@/wagmi.generated';
import Image from 'next/image';

export const ProjectHeader = () => {
  //   const { data, isLoading } = useReadProjectDescription();

  //   if (isLoading) return <p className="load">Loading...</p>;

  return (
    <div className="max-w-2xl text-mono-50">
      <Image
        src="/citizend-logo-circle.svg"
        alt="Citizend Logo"
        width={80}
        height={80}
        priority
      />
      <h2 className="mt-6 leading-10">Citizend Community Sale</h2>
      <p className="pt-2 text-mono-400 md:pt-3">
        The community-curated token launch platform of web3.
      </p>
      <div className="my-8 border-t border-mono-400" />
    </div>
  );
};
