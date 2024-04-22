import Image from 'next/image';
import noProjects from '../../../public/no-projects.png';

export const NoProjects = () => (
  <div className="mx-auto mb-44 mt-14 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2 ">
    <Image
      src={noProjects}
      alt="No projects ilustration"
      placeholder="blur"
      quality={100}
      sizes="(min-width: 768px) 33vw, 100vw"
      priority
    />
    <div className="flex items-center">
      <h2 className="font-normal">
        Looks like you haven&apos;t applied to a project yet
      </h2>
    </div>
  </div>
);
