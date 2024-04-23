import type { ReactNode } from 'react';
import clsx from 'clsx';
type TButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'primary-disabled' | 'secondary-disabled';
  className?: string;
};

export function Button({
  type = 'button',
  disabled = false,
  onClick,
  children,
  variant = 'primary',
  className,
  ...props
}: TButtonProps) {
  const variantClasses = {
    primary: 'hover:bg-blue-600 bg-blue-500 text-mono-50',
    'primary-disabled':
      'bg-blue-400 text-mono-50 pointer-events-none cursor-not-allowed opacity-80',
    secondary: 'text-blue-500',
    'secondary-disabled':
      'text-blue-400 pointer-events-none cursor-not-allowed',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'inline-flex select-none items-center justify-center gap-1 rounded-md px-6 py-4 font-medium transition-all duration-500 ease-in-out',
        variantClasses[variant],
        !disabled &&
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
