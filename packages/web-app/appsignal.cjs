const { Appsignal } = require('@appsignal/nodejs');

new Appsignal({
  active: true,
  name: 'citizend',
  environment: process.env.NEXT_PUBLIC_APP_SIGNAL_ENV || process.env.NODE_ENV,
  pushApiKey: process.env.NEXT_APP_SIGNAL,
  disableDefaultInstrumentations: ['@opentelemetry/instrumentation-http'],
});
