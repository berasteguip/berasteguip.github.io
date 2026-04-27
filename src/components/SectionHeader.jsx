import SpotlightTitle from "./SpotlightTitle.jsx";

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <SpotlightTitle as="h2">{title}</SpotlightTitle>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
