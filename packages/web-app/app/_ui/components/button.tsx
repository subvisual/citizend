import type { ReactNode } from 'react';
import clsx from 'clsx';
type TButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'dropdown' | 'primary-disabled';
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
    primary:
      'hover:bg-blue-600 bg-blue-500 text-mono-50 focus-visible:outline focus-visible:outline-mono-200-dark min-w-[14rem]',
    'primary-disabled':
      'bg-blue-400 text-mono-50 pointer-events-none cursor-not-allowed min-w-[14rem]',
    secondary:
      'bg-white text-blue-500 hover:text-blue-600 min-w-0 focus-visible:outline-2 focus-visible:outline-blue',
    dropdown:
      'bg-white outline outline-1 outline-blue-500 font-normal text-mono-200-dark hover:text-blue-600 focus-visible:outline-blue-600 min-w-[14rem]',
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'focus-visible:outline-offset hover:shadow-button inline-flex select-none items-center justify-center rounded-md p-4 font-medium',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
