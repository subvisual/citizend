import { Projects } from './_ui/projects';

export default function Home() {
  return (
    <div className="mb-56 flex flex-col items-center pb-12">
      <h1 className="mx-6 mb-2 md:mx-0 md:mb-4">Featured Projects</h1>
      <p className="mx-6 mb-14 text-mono-400 md:mx-0 md:mb-20">
        The community-curated token launch platform of web3.
      </p>
      <Projects />
    </div>
  );
}
