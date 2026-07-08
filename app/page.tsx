import Hero from "./components/Hero";
import LevelTracker from "./components/LevelTracker";
import RouteDivider from "./components/RouteDivider";
import EnglandSection from "./components/EnglandSection";
import JapanSection from "./components/JapanSection";
import EgyptSection from "./components/EgyptSection";
import BrazilSection from "./components/BrazilSection";
import WorldTourMarquee from "./components/WorldTourMarquee";
import TracksSection from "./components/TracksSection";
import DavidsonSection from "./components/DavidsonSection";

export default function Home() {
  return (
    <main className="relative">
      <LevelTracker />

      <Hero />
      <RouteDivider from="#070b22" to="#1533d6" route="KICKOFF WHISTLE" />

      <EnglandSection />
      <RouteDivider from="#f2ecdb" to="#1a0b3e" route="LONDON → TOKYO" flip />

      <JapanSection />
      <RouteDivider from="#120a2e" to="#0b5c56" route="TOKYO → CAIRO" />

      <EgyptSection />
      <RouteDivider from="#d1922f" to="#0f9a4c" route="CAIRO → RIO" flip />

      <BrazilSection />
      <WorldTourMarquee />

      <TracksSection />
      <RouteDivider from="#0a1050" to="#7a1225" route="WORLDWIDE → DAVIDSON" flip />

      <DavidsonSection />
    </main>
  );
}
