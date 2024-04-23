const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour12: true,
  timeZoneName: 'short',
});

const shortDateFormatter = new Intl.DateTimeFormat('default', {
  month: 'short',
  day: 'numeric',
  year: '2-digit',
});

export const shortDateRange = (start: bigint, end: bigint) => {
  try {
    const startDate = Number(start);
    const endDate = Number(end);

    return shortDateFormatter.formatRange(startDate, endDate);
  } catch (error) {
    console.error(error);
    return '';
  }
};

export const dateRange = (start: bigint, end: bigint) => {
  try {
    const startDate = parseInt(start.toString());
    const endDate = parseInt(end.toString());

    const result = dateFormatter.formatRange(startDate, endDate);

    return result.replace('–', 'to');
  } catch (error) {
    console.error(error);
    return '';
  }
};
