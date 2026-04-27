import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

export default function About() {
  return (
    <section className="section split-section" id="about">
      <SectionHeader
        eyebrow="About"
        title="A technical profile shaped by math, AI, and product pressure."
        description="The work is intentionally practical: build, test, clarify, and move technical ideas closer to something people can use."
      />
      <div className="body-copy">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="proof-list" aria-label="Profile proof points">
          {profile.proofPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
