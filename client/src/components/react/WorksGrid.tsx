import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import ProjectCard, { type Project } from "./ProjectCard";
import { getWorks, type Work } from "../../lib/payload";

function workToProject(w: Work): Project {
	return {
		id: w.id,
		title: w.title,
		category: w.category,
		description: w.description,
		thumbnail: w.thumbnail?.url ?? "",
		tags: w.tags?.map((t) => t.tag) ?? [],
		hasCaseStudy: w.hasCaseStudy,
		caseStudyHref: w.caseStudyHref ?? undefined,
		siteHref: w.siteHref ?? undefined,
	};
}

const WorksGrid = () => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [activeFilter, setActiveFilter] = useState("All");

	useEffect(() => {
		getWorks({ sort: "order", limit: "100" })
			.then(({ docs }) => setProjects(docs.map(workToProject)))
			.catch(console.error);
	}, []);

	const categories = [
		"All",
		...Array.from(new Set(projects.map((p) => p.category))),
	];

	const filtered =
		activeFilter === "All"
			? projects
			: projects.filter((p) => p.category === activeFilter);

	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-wrap gap-2">
				{categories.map((filter) => (
					<button
						key={filter}
						onClick={() => setActiveFilter(filter)}
						className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-300 ${
							activeFilter === filter
								? "bg-white text-black border-white"
								: "border-white/20 text-white/50 hover:text-white hover:border-white/40"
						}`}
					>
						{filter}
					</button>
				))}
			</div>

			<motion.div layout className="flex flex-col gap-3">
				{filtered.map((project, i) => (
					<motion.div
						key={project.id}
						layout
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3, delay: i * 0.05 }}
					>
						<ProjectCard project={project} />
					</motion.div>
				))}
			</motion.div>

			{filtered.length === 0 && projects.length > 0 && (
				<p className="text-white/40 text-center py-16">
					No projects in this category yet.
				</p>
			)}
		</div>
	);
};

export default WorksGrid;
