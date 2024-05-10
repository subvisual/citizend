import clsx from 'clsx';

export const Tooltip = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className="group relative">
      <button
        data-tooltip-target="tooltip-animation"
        type="button"
        className="text-mono-950 hover:text-mono-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle cx="8" cy="8" r="8" fill="currentColor" />
          <path
            d="M7.65191 13.0006V5.52462H8.99591V13.0006H7.65191ZM6.50391 6.58862V5.52462H8.99591V6.58862H6.50391ZM8.02991 4.32062C7.73124 4.32062 7.50724 4.24129 7.35791 4.08262C7.21791 3.92396 7.14791 3.72329 7.14791 3.48063C7.14791 3.23796 7.21791 3.03729 7.35791 2.87862C7.50724 2.71996 7.73124 2.64062 8.02991 2.64062C8.32857 2.64062 8.54791 2.71996 8.68791 2.87862C8.83724 3.03729 8.91191 3.23796 8.91191 3.48063C8.91191 3.72329 8.83724 3.92396 8.68791 4.08262C8.54791 4.24129 8.32857 4.32062 8.02991 4.32062Z"
            fill="white"
          />
        </svg>
      </button>
      <div
        id="tooltip-animation"
        role="tooltip"
        className={clsx(
          'tooltip invisible absolute z-10 inline-block min-w-72 rounded-lg bg-mono-950 px-3 py-2 text-sm font-medium normal-case text-white opacity-0 shadow-sm transition-opacity duration-300 group-hover:visible group-hover:opacity-100',
          className,
        )}
      >
        {text}
      </div>
    </div>
  );
};
