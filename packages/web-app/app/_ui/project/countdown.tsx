import { useReadCtzndSaleEnd } from '@/wagmi.generated';
import { useCountdown } from '../hooks/useCountdown';

export const CountDown = () => {
  const { data: saleEnd } = useReadCtzndSaleEnd();

  const { days, hours, minutes, seconds } = useCountdown(
    (saleEnd || 0n) * 1000n,
  );

  if (!saleEnd) return null;

  return (
    <div className="flex md:h-[88px]">
      <svg
        width="24"
        height="88"
        viewBox="0 0 24 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block"
      >
        <path
          d="M1.76176 15.5025L18.5996 1.1903C19.5036 0.421901 20.6514 0 21.8379 0H24V88H5C2.23858 88 0 85.7614 0 83V19.3122C0 17.8454 0.644114 16.4525 1.76176 15.5025Z"
          fill="#1A2330"
        />
      </svg>
      <div className="flex items-baseline bg-mono-900 p-6 font-medium text-mono-50">
        <div className="flex flex-wrap content-center items-center justify-center gap-6 leading-10 text-mono-50">
          <div className="-mb-6 flex w-full justify-center self-center md:mb-0 md:w-auto">
            ENDS IN
          </div>
          {days ? (
            <div className="flex items-baseline">
              <div className="text-3.5xl leading-10">{hours}</div>
              <span className="pl-1">DAYS</span>
            </div>
          ) : null}
          <div className="flex items-baseline">
            <div className="text-3.5xl leading-10">{hours}</div>
            <span className="pl-1">H</span>
          </div>
          <div className="flex items-baseline">
            <div className="text-3.5xl leading-10">{minutes}</div>
            <span className="pl-1">MIN</span>
          </div>
          <div className="flex w-20 items-baseline justify-end">
            <div className="text-3.5xl leading-10">{seconds}</div>
            <span className="pl-1">SEC</span>
          </div>
        </div>
      </div>
      <svg
        width="24"
        height="88"
        viewBox="0 0 24 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block"
      >
        <path
          d="M22.2382 72.4975L5.40036 86.8097C4.49635 87.5781 3.34856 88 2.16211 88H0V0H19C21.7614 0 24 2.23858 24 5V68.6878C24 70.1546 23.3559 71.5475 22.2382 72.4975Z"
          fill="#1A2330"
        />
      </svg>
    </div>
  );
};
