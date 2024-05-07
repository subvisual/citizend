import { Projects } from './_ui/projects';

export default function Home() {
  return (
    <div className="mb-56 flex flex-col items-center pb-12">
      <h1 className="mx-6 mb-14 md:mx-0 md:mb-20">Featured Projects</h1>
      <Projects />
    </div>
  );
}
