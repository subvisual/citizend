'use client';
import { useSubscribeNewsletterMutation } from '@/app/_lib/actions';
import { Input } from './input';
import { useState } from 'react';
import { Button } from './button';
import { ArrowRight } from './svg/arrow-right';

export const SubscribeNewsletter = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const { data, mutate, error } = useSubscribeNewsletterMutation();
  const handleSubmit = () => {
    if (!consent) {
      setValidationError('Please check the box below if you want to proceed.');
      return;
    }
    if (!email) {
      setValidationError('Please enter your email.');
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setValidationError('Please enter a valid email.');
      return;
    }
    // remove whitespace
    mutate({ email: email.trim() });
    setValidationError(null);
  };

  if (data?.success) {
    return (
      <div className="text-green-500">
        Thank you! Your submission has been received!
      </div>
    );
  }

  return (
    <div>
      <Input
        autoComplete="email"
        hideLabel
        label="Email"
        id="email"
        placeholder="Enter your email"
        className="w-full md:w-[467px]"
        onChange={(e) => {
          setValidationError(null);
          setEmail(e.target.value);
        }}
        onSubmit={handleSubmit}
        transparent
        error={error?.message || validationError}
        type="email"
        units={
          <Button
            aria-label="submit"
            variant="secondary"
            className="absolute right-4 top-[20%] pb-0 pl-0 pr-0 pt-0"
            onClick={handleSubmit}
          >
            <ArrowRight className="hover:text-blue-600" />
          </Button>
        }
      />
      <div className="relative flex w-full items-start pt-4 md:w-[467px]">
        <div className="flex h-6 items-center">
          <input
            id="consent"
            onChange={() => {
              setConsent(!consent);
              setValidationError(null);
            }}
            aria-describedby="consent-description"
            name="consent"
            type="checkbox"
            className="h-5 w-5 rounded border-mono-800 bg-transparent text-blue-500 focus:ring-mono-800"
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor="consent" className="sr-only">
            Consent
          </label>
          <p id="comments-description" className="text-mono-50">
            I freely give consent to process my personal data for the purposes
            of sending newsletters and/or other communication.
          </p>
        </div>
      </div>
    </div>
  );
};
