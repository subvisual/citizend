type TBurgerMenuProps = {
  openDialog: () => void;
};

export const BurgerMenu = ({ openDialog }: TBurgerMenuProps) => {
  return (
    <button
      className="bg-transparent focus:outline-none"
      onClick={openDialog}
      id="navigation-mobile-button"
      aria-label="Open navigation menu"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4.00195 5H19.9993"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12H19.9934"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.00195 19H19.9926"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
