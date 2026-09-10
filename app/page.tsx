import SiteHeader from "./components/general/SiteHeader";
import Hero from "./components/general/Hero";
import About from "./components/general/About";
import Programs from "./components/general/Programs";
import Projects from "./components/general/Projects";
import Gallery from "./components/general/Gallery";
import Eboard from "./components/general/Eboard";
import Sponsors from "./components/general/Sponsors";
import Contact from "./components/general/Contact";
import SiteFooter from "./components/general/SiteFooter";

// hackatdavidson.com — the umbrella organization site. Deliberately unthemed;
// the themed event site lives in its own repo. Links point to last year's
// live site (2026.hackatdavidson.com) for now, labeled "2026" so it reads as
// simply not-yet-updated rather than broken — swap to the real 2027 site
// (and relabel to "2027") once it's deployed.
export default function Home() {
  return (
    <div className="site-general" id="top">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Programs />
        <Gallery />
        <Projects />
        <Eboard />
        <Sponsors />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
