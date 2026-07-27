"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const chapters = [
  {
    id: "london",
    kicker: "01 / Kickoff",
    city: "London",
    title: "The Match Starts Here.",
    copy: "A weekend for turning rough ideas into working things. Bring a team, find one, or wander in curious.",
    palette: "chapter-london",
    artifact: "big-ben",
  },
  {
    id: "tokyo",
    kicker: "02 / Training Grounds",
    city: "Tokyo",
    title: "Power Up Before You Build.",
    copy: "Workshops, mentors, starter kits, and late-night experiments. Less noise, more momentum.",
    palette: "chapter-tokyo",
    artifact: "neon",
  },
  {
    id: "cairo",
    kicker: "03 / Underdog Story",
    city: "Giza",
    title: "Start Before You Feel Ready.",
    copy: "Never coded before? Good. The best demos usually begin as a tiny dot facing something impossibly large.",
    palette: "chapter-cairo",
    artifact: "pyramid",
  },
  {
    id: "rio",
    kicker: "04 / Find Your Squad",
    city: "Rio",
    title: "No One Wins Alone.",
    copy: "Draft collaborators, trade skills, and make the project bigger than what any one person could have carried.",
    palette: "chapter-rio",
    artifact: "rio",
  },
];

function SceneArtifact({ type }: { type: string }) {
  if (type === "big-ben") {
    return (
      <div className="art-stack art-london" aria-hidden>
        <Image
          src="/assets/public-domain/big-ben.svg"
          alt=""
          width={1400}
          height={4000}
          className="public-asset public-asset-bigben"
        />
        <div className="rain-field" />
        <div className="route-strokes route-strokes-london" />
      </div>
    );
  }

  if (type === "neon") {
    return (
      <div className="art-stack art-neon" aria-hidden>
        <div className="sun-disc sun-disc-pink" />
        <div className="neon-rail">
          <span />
          <span />
          <span />
        </div>
        <div className="tower-mark" />
        <div className="city-bars city-bars-neon">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (type === "pyramid") {
    return (
      <div className="art-stack art-cairo" aria-hidden>
        <div className="sun-disc sun-disc-gold" />
        <div className="pyramid-field">
          <span />
          <span />
          <span />
        </div>
        <div className="tiny-builder" />
      </div>
    );
  }

  return (
    <div className="art-stack art-rio" aria-hidden>
      <Image
        src="/assets/public-domain/christ-and-liberty.svg"
        alt=""
        width={1260}
        height={765}
        className="public-asset public-asset-rio"
      />
      <div className="rio-bay" />
      <div className="rio-ribbons" />
      <div className="sugarloaf-shape" />
    </div>
  );
}

function Chapter({ chapter, index }: { chapter: (typeof chapters)[number]; index: number }) {
  return (
    <section id={chapter.id} className={`editorial-chapter ${chapter.palette}`}>
      <div className="chapter-orbit" aria-hidden />
      <div className="chapter-inner">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="chapter-copy"
        >
          <p className="journey-kicker">{chapter.kicker}</p>
          <p className="journey-city">{chapter.city}</p>
          <h2>{chapter.title}</h2>
          <p>{chapter.copy}</p>
        </motion.div>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="chapter-art"
        >
          <span className="chapter-number">0{index + 1}</span>
          <SceneArtifact type={chapter.artifact} />
        </motion.div>
      </div>
    </section>
  );
}

function RouteMap() {
  return (
    <section id="tracks" className="route-map-section">
      <div className="route-map-inner">
        <div>
          <p className="journey-kicker">05 / Choose Your Route</p>
          <h2>Pick a problem. Build your answer.</h2>
        </div>
        <div className="route-board" aria-label="Hackathon tracks">
          {["Local Impact", "Education", "Health", "Climate", "AI & Society", "Creative Tech", "Wildcard"].map((track, i) => (
            <a key={track} href="#davidson" className="route-line">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <strong>{track}</strong>
              <em>{i === 6 ? "ANYWHERE" : "BOARDING"}</em>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Finale() {
  return (
    <section id="davidson" className="finale-section">
      <div className="finale-routes" aria-hidden />
      <div className="finale-copy">
        <p className="journey-kicker">Final / Davidson</p>
        <h2>The World Lands at Davidson.</h2>
        <p>One campus. A whole world of ideas. Register, sponsor, or help run the thing.</p>
        <div className="finale-actions">
          <a href="#">Register</a>
          <a href="#">Sponsor</a>
          <a href="#">Join Team</a>
        </div>
      </div>
      <div className="chambers-poster" aria-hidden>
        <div className="chambers-roof" />
        <div className="chambers-body">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}

export default function EditorialJourney() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const fieldScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.14]);
  const fieldY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const tunnelScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroCopyY = useTransform(scrollYProgress, [0, 1], [0, -64]);
  const heroCopyOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <main className="editorial-site">
      <section id="hero" ref={heroRef} className="editorial-hero">
        <nav className="editorial-nav" aria-label="Primary">
          <a href="#hero">Hack@Davidson</a>
          <div>
            <a href="#london">About</a>
            <a href="#tracks">Tracks</a>
            <a href="#davidson">Register</a>
          </div>
        </nav>
        <motion.div
          style={{ scale: fieldScale, y: fieldY }}
          className="matchday-field"
          aria-hidden
        >
          <Image
            src="/assets/public-domain/football-field-night.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="field-grade" />
        </motion.div>

        <motion.div style={{ scale: tunnelScale }} className="player-tunnel" aria-hidden>
          <div className="tunnel-ceiling">
            <div className="tunnel-lights">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="tunnel-wall tunnel-wall-left">
            <div className="team-bands" />
          </div>
          <div className="tunnel-wall tunnel-wall-right">
            <div className="team-bands" />
          </div>
          <div className="tunnel-floor">
            <span className="touchline" />
          </div>
        </motion.div>

        <div className="matchday-confetti" aria-hidden>
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <motion.div
          style={{ y: heroCopyY, opacity: heroCopyOpacity }}
          className="hero-title"
        >
          <p>Hack@Davidson 2027</p>
          <h1>Welcome<br />to the Cup.</h1>
          <div className="hero-match-info">
            <span>Davidson, NC</span>
            <i />
            <span>Spring 2027</span>
          </div>
          <a href="#london">Enter the Pitch</a>
        </motion.div>

        <div className="hero-scroll-cue" aria-hidden>
          <span />
          <p>Walk out</p>
        </div>
      </section>

      {chapters.map((chapter, index) => (
        <Chapter key={chapter.id} chapter={chapter} index={index} />
      ))}
      <RouteMap />
      <Finale />
    </main>
  );
}
