import Appsignal from '@appsignal/javascript';

export const appSignal = new Appsignal({
  key: process.env.NEXT_PUBLIC_APP_SIGNAL,
  namespace: process.env.NEXT_PUBLIC_APP_SIGNAL_ENV || process.env.NODE_ENV,
});
