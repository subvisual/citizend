const leadingChars = 4;
const trailingChars = 4;

export function formatAddress(address: string): string {
  return address.length < leadingChars + trailingChars
    ? address
    : `${address.substring(0, leadingChars)}\u2026${address.substring(
        address.length - trailingChars,
      )}`;
}
