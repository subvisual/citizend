const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour12: true,
  timeZoneName: 'short',
});

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
