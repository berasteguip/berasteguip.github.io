import { skillGroups } from "../data/skills.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="Tools and capabilities reflected in the work above."
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.category}>
            <h3>{group.category}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
