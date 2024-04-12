export const compareAddresses = (a: string, b: string) => {
  return a.toLowerCase() === b.toLowerCase();
};

export const isValidGrant = (bigIntDate: number) => {
  const timestamp = BigInt(bigIntDate) * BigInt(1000); // Convert to milliseconds
  return Date.now() <= timestamp;
};
