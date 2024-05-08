import Image from 'next/image';
import { getRelativePath } from '../utils/getRelativePath';
import citizendCardDesktop from '../../../public/citizend-card-desktop.png';

export const BannerImage = ({
  background,
  backgroundMobile,
  logo,
}: {
  background: string;
  backgroundMobile: string;
  logo: string;
}) => {
  const logoHref = getRelativePath(logo);

  return (
    <div className="relative flex justify-center">
      <Image
        src={citizendCardDesktop}
        alt="Project banner"
        placeholder="blur"
        sizes="(min-width: 768px) 33vw, 100vw"
        priority
        className="h-[161px] w-[278px] rounded-xl md:h-[210px] md:w-[363px]"
      />
      <div className="absolute -bottom-11 left-1/2 -translate-x-1/2">
        <Image src={logoHref} alt="Project Logo" width={92} height={92} />
      </div>
    </div>
  );
};
