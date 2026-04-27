import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeader
        eyebrow="Selected projects"
        title="Evidence through built work."
        description="Three projects from computer vision, SME automation, and product-style experimentation."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
