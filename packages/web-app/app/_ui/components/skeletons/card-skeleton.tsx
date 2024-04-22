type TCardSkeletonProps = {
  width: string;
  height: string;
};

export const CardSkeleton = ({ width, height }: TCardSkeletonProps) => (
  <div
    className={`h-[${height}] w-full rounded-2.5xl bg-mono-950 md:w-[${width}]`}
  >
    <div
      className={`h-[${height}] w-full animate-pulse rounded-2.5xl bg-gradient-to-br from-mono-800 to-mono-900 md:w-[${width}]`}
    />
  </div>
);
