import { DefaultAvatar, LockedAvatar, PendingAvatar } from './svg/avatars';
import { idOSCredentialStatus } from '@/app/_types/idos';

const avatarMap = {
  pending: PendingAvatar,
  contacted: PendingAvatar,
  approved: DefaultAvatar,
  rejected: LockedAvatar,
  expired: LockedAvatar,
};

const getAvatarFromStatus = (status: idOSCredentialStatus | undefined) => {
  return (status && avatarMap[status]) || LockedAvatar;
};

export const Avatar = () => {
  return <DefaultAvatar />;
};
