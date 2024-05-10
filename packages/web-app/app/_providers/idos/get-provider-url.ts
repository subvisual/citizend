const providerBaseUrl = process.env.NEXT_PUBLIC_PROFILE_PROVIDER_BASE;
const responseType = '&response_type=code';
const scope =
  '&scope=contact%3Aread%20verification.plus%3Aread%20verification.plus.details%3Aread';
const providerIdosCheck =
  '%20verification.idos%3Aread%20verification.idos.details%3Aread';
const providerLivenessCheck =
  '%20verification.liveness%3Aread%20verification.liveness.details%3Aread';
const providerEthWalletCheck =
  '%20verification.wallet-eth%3Aread%20verification.wallet-eth.details%3Aread';
const providerEnsureWalletCheck = '&ensure_wallet=';
const providerUniqueCheck =
  '%20verification.uniq%3Aread%20verification.uniq.details%3Aread';
const userRole = '&user_role=person';

export const getProviderUrl = (address?: string) => {
  if (!address) {
    return (
      providerBaseUrl +
      responseType +
      scope +
      providerIdosCheck +
      providerLivenessCheck +
      providerUniqueCheck +
      providerEthWalletCheck +
      userRole
    );
  }

  return (
    providerBaseUrl +
    responseType +
    scope +
    providerIdosCheck +
    providerLivenessCheck +
    providerUniqueCheck +
    providerEthWalletCheck +
    providerEnsureWalletCheck +
    address +
    userRole
  );
};
