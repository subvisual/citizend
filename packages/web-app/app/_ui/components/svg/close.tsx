type TCloseProps = {
  onClick: () => void;
};

export const Close = ({ onClick }: TCloseProps) => {
  return (
    <button
      aria-label="Close"
      onClick={onClick}
      className="absolute right-0 h-6 w-6 text-mono-950 hover:text-mono-800"
      aria-hidden="true"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4002 12L4 5.59977L5.59977 4L12 10.4002L18.4002 4L20 5.59977L13.5998 12L20 18.4002L18.4002 20L12 13.5998L5.59977 20L4 18.4002L10.4002 12Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
