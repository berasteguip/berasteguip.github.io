import { profile } from "../data/profile.js";
import { publicLinks } from "../data/links.js";

function SystemsVisual() {
  return (
    <div className="systems-visual" aria-label="Structured workflow diagram">
      <div className="visual-label">Workflow lens</div>
      <div className="visual-grid">
        <span>Input</span>
        <span>Signal</span>
        <span>Model</span>
        <span>Workflow</span>
        <span>Output</span>
        <span>Learning</span>
      </div>
      <div className="visual-flow" aria-hidden="true">
        <div />
        <div />
        <div />
      </div>
      <div className="visual-note">
        Data, process, product, and execution kept in the same frame.
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-content">
        <p className="eyebrow">{profile.location} technical builder</p>
        <h1>{profile.headline}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href="#projects">
            View projects
          </a>
          <a className="button secondary" href="#contact">
            Public links
          </a>
        </div>
        <div className="link-row" aria-label="Selected public links">
          {publicLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <SystemsVisual />
    </section>
  );
}
