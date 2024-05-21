'use client';

import { QueryClient } from '@tanstack/react-query';
import { TChildren } from '@/app/_types';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { deserialize, serialize } from 'wagmi';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { hashFn } from 'wagmi/query';

const oneMinute = 1_000 * 60;
const oneHour = oneMinute * 60;
const tenMinutes = oneMinute * 10;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryKeyHashFn: hashFn,
      retry: 0,
      staleTime: tenMinutes,
      gcTime: oneHour,
    },
  },
});

export function PersistQueryWrapper({ children }: TChildren) {
  const persister = createAsyncStoragePersister({
    serialize,
    storage: window?.sessionStorage,
    deserialize,
  });

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </PersistQueryClientProvider>
  );
}
