export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-topline">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{project.role}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="project-summary">{project.summary}</p>
      <dl className="project-details">
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>Built</dt>
          <dd>{project.built}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{project.status}</dd>
        </div>
      </dl>
      <ul className="tag-list" aria-label={`${project.name} stack`}>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {project.links.length > 0 ? (
        <div className="card-links">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
