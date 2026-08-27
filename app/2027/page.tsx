import type { Metadata } from "next";
import EditorialJourney from "../components/EditorialJourney";

export const metadata: Metadata = {
  title: "Hack@Davidson 2027 — Around the World",
  description:
    "Davidson's student-run hackathon. Build Locally. Think Globally. One weekend, a whole world of ideas.",
};

// The themed event site. Lives here until it moves to 2027.hackatdavidson.com.
// `.theme-worldtour` re-applies the tournament palette to <body> (see globals.css).
export default function Hackathon2027() {
  return (
    <div className="theme-worldtour">
      <EditorialJourney />
    </div>
  );
}
