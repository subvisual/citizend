'use client';

import { memo } from 'react';
import { useDebounce } from '../utils/useDebounce';
import clsx from 'clsx';
import { on } from 'events';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  units?: JSX.Element | string;
  error?: string | null;
  className?: string;
  variant?: 'text' | 'number';
  hideLabel?: boolean;
  transparent?: boolean;
  onSubmit?: () => void;
}

const defaultOnChange = () => {};

const Units = ({ units }: { units: string | JSX.Element }) => {
  if (typeof units === 'string') {
    return <div className="absolute bottom-4 right-6 select-none">{units}</div>;
  }

  return units;
};

export const Input = memo(
  ({
    label,
    id,
    onChange,
    error,
    units,
    disabled,
    className,
    variant = 'text',
    hideLabel = false,
    transparent = false,
    onSubmit,
    ...props
  }: IInputProps) => {
    const handleChange = useDebounce(onChange || defaultOnChange, 300);
    const defaults =
      variant === 'number'
        ? { type: 'number', defaultValue: 0, min: 0 }
        : {
            type: 'text',
            defaultValue: '',
          };

    // handle enter key to submit form
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onSubmit && onSubmit();
      }
    };

    return (
      <div className={clsx('group flex flex-col gap-2', className)}>
        <label
          className={clsx(
            'text-mono-500 transition-colors duration-200 ease-in-out group-focus-within:text-blue-500',
            hideLabel && 'sr-only',
          )}
          htmlFor={id}
        >
          {label}
        </label>
        <div className="relative">
          <input
            {...defaults}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            className={clsx(
              'w-full rounded-md border px-6 py-4 pr-2 transition-colors duration-200 ease-in-out',
              disabled
                ? 'bg-mono-200 text-mono-800'
                : ' hover:border-mono-400 focus:text-mono-950 focus:ring-blue-500 active:border-blue-500 active:text-mono-950',
              transparent && !disabled
                ? 'border-mono-800 bg-transparent text-mono-50 placeholder:text-mono-400 focus:text-mono-50 active:text-mono-50'
                : 'border-mono-200 text-mono-800',
              error && 'border-red-700',
            )}
            id={id}
            onChange={onChange && !disabled ? handleChange : undefined}
            {...props}
          />
          {units ? <Units units={units} /> : null}
        </div>
        {error ? (
          <div className="text-red-700" id="error">
            {error}
          </div>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';
