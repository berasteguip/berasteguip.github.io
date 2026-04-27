import { experience } from "../data/experience.js";
import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Experience() {
  return (
    <section className="section split-section" id="experience">
      <SectionHeader
        eyebrow="Experience / Education"
        title="A compact trajectory across study, building, and responsibility."
      />
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={`${item.title}-${item.period}`}>
            <div className="timeline-meta">
              <span>{item.period}</span>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className="organization">{item.organization}</p>
              <p>{item.description}</p>
              {item.bullets.length > 0 ? (
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
        <div className="working-style">
          <h3>Working style</h3>
          <ul>
            {profile.workingStyle.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
