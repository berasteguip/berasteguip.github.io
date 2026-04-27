import { contactLinks, publicLinks } from "../data/links.js";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div>
        <p className="section-eyebrow">Contact</p>
        <h2>Contact and public references.</h2>
      </div>
      <div className="contact-panel">
        <p>
          berasteguip@gmail.com
        </p>
        <div className="contact-links" aria-label="Contact links">
          {contactLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
        <div className="reference-links" aria-label="Project references">
          {publicLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
