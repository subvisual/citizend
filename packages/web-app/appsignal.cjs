const { Appsignal } = require('@appsignal/nodejs');

new Appsignal({
  active: true,
  name: 'citizend',
  pushApiKey: process.env.NEXT_APP_SIGNAL,
  disableDefaultInstrumentations: ['@opentelemetry/instrumentation-http'],
});
