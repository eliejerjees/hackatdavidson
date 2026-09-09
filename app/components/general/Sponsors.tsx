"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";

// Pulled from the logos shown on hackatdavidson.com's sponsors section —
// a mix of past and current partners, not all active at once.
const SPONSORS = [
  { name: "Fidelity Investments", file: "fidelity.png" },
  { name: "Cloudflare", file: "cloudflare.png" },
  { name: "Vercel", file: "vercel.png" },
  { name: "Major League Hacking", file: "mlh.png" },
  { name: "ElevenLabs", file: "elevenlabs.svg" },
  { name: "GoDaddy Registry", file: "godaddy.png" },
  { name: "Nord", file: "nord.png" },
  { name: "PCBWay", file: "pcbway.png" },
  { name: "Starknet", file: "starknet.png" },
  { name: "Stellar", file: "stellar.png" },
  { name: "Kintone", file: "kintone.png" },
  { name: "Precisely", file: "precisely.png" },
  { name: "Mobbin", file: "mobbin.png" },
  { name: "GDG", file: "gdg.png" },
  { name: "The Hurt Hub @ Davidson", file: "hurt-hub.png" },
  { name: "Davidson College", file: "davidson-college.webp" },
  { name: "CLT", file: "clt.png" },
  { name: "Forest", file: "forest.png" },
  { name: "Summit Coffee", file: "summit-coffee.png" },
  { name: "Pure Buttons", file: "pure-buttons.png" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="g-ground-cool scroll-mt-20 rounded-[var(--g-r-xl)]">
      <div className="g-wrap py-16 lg:py-20">
        <Reveal y={22}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="g-h2">Sponsors</h2>
              <p
                className="mt-3 text-[0.95rem] font-semibold"
                style={{ color: "var(--g-red)" }}
              >
                Past and present sponsors.
              </p>
            </div>
            <Link href="/sponsor" className="g-btn g-btn-solid">
              Become a sponsor
            </Link>
          </div>
        </Reveal>

        <Reveal y={20} delay={0.06}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-5">
            {SPONSORS.map((s) => (
              <div
                key={s.name}
                className="g-tile g-tile-lift aspect-[4/3] overflow-hidden bg-white p-5"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={`/assets/sponsors/${s.file}`}
                    alt={s.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
