/**
 * Module dependencies.
 */

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

/**
 * Register `dayjs` plugins.
 */

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault('Europe/Lisbon');

/**
 * Export dayjs with timezone.
 */

export default dayjs;
