import ValueSection from "./components/section/ValueSection";
import SkillSection from "./components/section/SkillSection";
import CareerSection from "./components/section/CareerSection";
import ProjectSection from "./components/section/ProjectSection";
import IntroSection from "./components/section/IntroSection";
import EndingSection from "./components/section/EndingSection";
import SideMenu from "./components/SideMenu";

export default function Home() {
  return (
    <main className="w-full max-w-5xl">
      <IntroSection />
      <ValueSection />
      <SkillSection />
      <CareerSection />
      <ProjectSection />
      <EndingSection />
      <SideMenu />
    </main>
  );
}
