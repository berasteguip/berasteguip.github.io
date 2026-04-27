import { profile } from "../data/profile.js";
import { publicLinks } from "../data/links.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>2026 {profile.displayName}. Built with React and Vite.</p>
      <div className="footer-links" aria-label="Footer links">
        {publicLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
