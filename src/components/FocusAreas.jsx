import { focusAreas } from "../data/focusAreas.js";
import SectionHeader from "./SectionHeader.jsx";

export default function FocusAreas() {
  return (
    <section className="section" id="focus">
      <SectionHeader
        eyebrow="Focus areas"
        title="The recurring themes behind the work."
      />
      <div className="focus-grid">
        {focusAreas.map((area, index) => (
          <article className="focus-card" key={area.title}>
            <span className="index-marker">{String(index + 1).padStart(2, "0")}</span>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
