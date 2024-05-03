export const calculateTokenPrice = (totalContributed: number): number => {
  if (totalContributed < 500_000) {
    return 0.2;
  }

  if (totalContributed > 1_000_000) {
    return 0.4;
  }

  return (0.2 + (0.4 - 0.2 * (Number(totalContributed) - 500000) / (1_000_000 - 500_000)));
}
