import CoverParticles from "@/components/cover-particicles";
import Introduccion from "@/components/introdution";
import TransitionPage from "@/components/TransitionPage";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover ">
        <CoverParticles/>
        <Introduccion/>
      </div>
    </main>
  );
}
