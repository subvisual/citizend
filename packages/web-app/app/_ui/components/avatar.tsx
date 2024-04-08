import { useKyc } from '@/app/_providers/kyc/context';
import { DefaultAvatar, LockedAvatar, PendingAvatar } from './svg/avatars';
import { idOSCredentialStatus } from '@/app/_types/idos';

const avatarMap = {
  pending: PendingAvatar,
  contacted: PendingAvatar,
  approved: DefaultAvatar,
  rejected: LockedAvatar,
  expired: LockedAvatar,
};

const getAvatar = (status: idOSCredentialStatus | undefined) => {
  return (status && avatarMap[status]) || LockedAvatar;
};

export const Avatar = () => {
  const { status } = useKyc();
  const Avatar = getAvatar(status);

  return <Avatar />;
};
