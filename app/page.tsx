import CoverParticles from "@/components/cover-particicles";
import TransitionPage from "@/components/TransitionPage";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover ">
        <CoverParticles/>
        <p>Introduccion</p>
      </div>
    </main>
  );
}
