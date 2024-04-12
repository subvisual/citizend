import { Check } from '../components/svg/check';

export const AppliedSuccess = () => (
  <>
    <div className="flex items-center justify-center gap-4 rounded-md bg-slate-50 px-8 py-4 text-mono-950">
      <Check />
      <span>You applied to this project</span>
    </div>
    <p className="px-8 text-center text-mono-50">
      We will send a reminder to everyone who is eligible 24h before the sale.
    </p>
  </>
);
