import { useEffect, useState } from "react";

type Media = { url?: string; alt?: string };
type Project = {
  id: string | number; title: string; eyebrow?: string; summary: string;
  projectType?: string; year?: string; liveURL?: string; coverImage?: Media | string;
};

const fallback: Project[] = [{
  id: "tourpass", title: "Tourpass", eyebrow: "Product build", projectType: "App + platform",
  year: "In progress", summary: "A product experience for discovering live music, following tours, and staying close to the shows that matter.",
  coverImage: { url: "/tourpass.png", alt: "Tourpass product interface" },
}];

const getImage = (project: Project) => typeof project.coverImage === "object" ? project.coverImage?.url : undefined;

export default function ProjectFeed({ limit }: { limit?: number }) {
  const [projects, setProjects] = useState<Project[]>(fallback);

  useEffect(() => {
    const base = import.meta.env.PUBLIC_PAYLOAD_URL;
    if (!base) return;
    const url = new URL("/api/projects", base);
    url.searchParams.set("where[_status][equals]", "published");
    url.searchParams.set("sort", "order");
    url.searchParams.set("depth", "1");
    url.searchParams.set("limit", String(limit ?? 100));
    fetch(url).then((response) => {
      if (!response.ok) throw new Error(`CMS returned ${response.status}`);
      return response.json();
    }).then((data) => {
      if (Array.isArray(data.docs) && data.docs.length) setProjects(data.docs);
    }).catch(() => { /* Keep the deliberate local fallback when the CMS is unavailable. */ });
  }, [limit]);

  return <div className="project-grid">
    {projects.slice(0, limit).map((project) => {
      const image = getImage(project);
      return <article className="project-card" key={project.id}>
        <div className="project-visual">
          {image ? <img src={image} alt={typeof project.coverImage === "object" ? project.coverImage.alt ?? "" : ""} /> : <span className="brand-shield">SUDO</span>}
        </div>
        <div className="project-body">
          <div className="project-meta"><span>{project.eyebrow ?? project.projectType ?? "Project"}</span><span>{project.year ?? ""}</span></div>
          <h3>{project.title}</h3><p className="muted">{project.summary}</p>
          {project.liveURL && <a className="project-link" href={project.liveURL} target="_blank" rel="noreferrer">Visit project →</a>}
        </div>
      </article>;
    })}
  </div>;
}
