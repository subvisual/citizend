import Link from 'next/link';

export const SaleBanner = () => {
  return (
    <div className="left-0 -mt-10 mb-20 flex flex-col items-center bg-mono-900 px-4 py-6 text-center shadow-banner shadow-mono-950 md:-mt-20">
      <p>
        Citizend optimizes for community distribution while enabling price
        discovery.
      </p>
      <p>
        Please keep in mind that you may not get your full desired contribution.
      </p>
      <Link
        className="text-blue-500"
        href={
          'https://docs.citizend.xyz/citizend/how-citizend-works/discovery-batches-and-securing-a-contribution-slot/rising-tide-mechanism'
        }
      >
        Find more details about the Rising Tide Mechanism.
      </Link>
    </div>
  );
};
