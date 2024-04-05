export const compareAddresses = (a: string, b: string) => {
  return a.toLowerCase() === b.toLowerCase();
};

export const isValidGrant = (bigIntDate: number) => {
  const timestamp = BigInt(bigIntDate) * BigInt(1000); // Convert to milliseconds
  const date = new Date(Number(timestamp)); // Convert to Date object
  return new Date() <= date;
};
