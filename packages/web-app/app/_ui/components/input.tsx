'use client';

import { memo, useRef } from 'react';
import { useDebounce } from '../utils/useDebounce';
import clsx from 'clsx';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  units?: string;
  error?: string;
  className?: string;
}

const defaultOnChange = () => {};

export const Input = memo(
  ({
    label,
    id,
    onChange,
    error,
    units,
    disabled,
    className,
    ...props
  }: IInputProps) => {
    const handleChange = useDebounce(onChange || defaultOnChange, 300);

    return (
      <div className={clsx('group flex flex-col gap-2', className)}>
        <label
          className="text-mono-500 transition-colors duration-200 ease-in-out group-focus-within:text-blue-500"
          htmlFor={id}
        >
          {label}
        </label>
        <div className="relative">
          <input
            defaultValue={0}
            min={0}
            disabled={disabled}
            className={clsx(
              'w-full rounded-md border border-mono-200 px-6 py-4 pr-2 text-mono-800 transition-colors duration-200 ease-in-out',
              disabled
                ? 'bg-mono-200 text-mono-800'
                : ' hover:border-mono-400 focus:text-mono-950 focus:ring-blue-500 active:border-blue-500 active:text-mono-950',
              error && 'border-red-700',
            )}
            id={id}
            onChange={onChange && !disabled ? handleChange : undefined}
            {...props}
          />
          {units ? (
            <div className="absolute bottom-4 right-6 select-none">{units}</div>
          ) : null}
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
