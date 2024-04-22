const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  hour12: true,
  timeZoneName: 'short',
});

export const formatDate = (date: bigint) => {
  try {
    const numberDate = parseInt(date.toString());

    return dateFormatter.format(numberDate);
  } catch (error) {
    console.log(error);
    return '';
  }
};
