import { ErrorBoundary } from '@appsignal/react';
import { appSignal } from '../app-signal';
import { TChildren } from '../_types';

const FallbackComponent = () => <div>Something went wrong</div>;

export const AppSignalWrapper = ({ children }: TChildren) => (
  <ErrorBoundary instance={appSignal} fallback={FallbackComponent}>
    {children}
  </ErrorBoundary>
);
