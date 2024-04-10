import Image from 'next/image';
import { getRelativePath } from '../utils/getRelativePath';

export const BannerImage = ({
  background,
  backgroundMobile,
  logo,
}: {
  background: string;
  backgroundMobile: string;
  logo: string;
}) => {
  const backgroundHref = getRelativePath(background);
  const backgroundMobileHref = getRelativePath(backgroundMobile);
  const logoHref = getRelativePath(logo);

  return (
    <div className="relative">
      <Image
        src={backgroundHref}
        alt="Project banner"
        width={363}
        height={210}
        priority
        className="hidden rounded-xl md:block"
      />
      <Image
        src={backgroundMobileHref}
        alt="Project banner"
        width={278}
        height={161}
        priority
        className="rounded-xl md:hidden"
      />
      <div className="absolute -bottom-11 left-1/2 -translate-x-1/2">
        <Image
          src={logoHref}
          alt="Project Logo"
          width={92}
          height={92}
          priority
        />
      </div>
    </div>
  );
};
