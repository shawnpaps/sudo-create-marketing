import React, { useState } from "react";
import { motion } from "motion/react";
import ProjectCard, { type Project } from "./ProjectCard";

const PROJECTS: Project[] = [
	{
		id: "tourpass",
		title: "Tourpass",
		category: "Music Tech",
		description:
			"A revolutionary networking platform for music industry professionals — connecting artists, agents, and venues in a single seamless experience.",
		thumbnail: "/tourpass.png",
		tags: ["Product Design", "Web App", "React", "Node.js"],
		hasCaseStudy: true,
		caseStudyHref: "/works/tourpass",
		siteHref: "#",
	},
	{
		id: "project-2",
		title: "Project Two",
		category: "Brand Identity",
		description: "Placeholder — add your project description here.",
		thumbnail: "",
		tags: ["Branding", "Web Design"],
		hasCaseStudy: false,
		siteHref: "#",
	},
	{
		id: "project-3",
		title: "Project Three",
		category: "App Development",
		description: "Placeholder — add your project description here.",
		thumbnail: "",
		tags: ["React Native", "iOS", "Android"],
		hasCaseStudy: true,
		caseStudyHref: "/works/project-three",
		siteHref: "#",
	},
	{
		id: "project-4",
		title: "Project Four",
		category: "Content Media Systems",
		description: "Placeholder — add your project description here.",
		thumbnail: "",
		tags: ["Video Infrastructure", "CMS", "Streaming"],
		hasCaseStudy: false,
		siteHref: "#",
	},
	{
		id: "project-5",
		title: "Project Five",
		category: "Website Development",
		description: "Placeholder — add your project description here.",
		thumbnail: "",
		tags: ["Astro", "Tailwind", "CMS"],
		hasCaseStudy: true,
		caseStudyHref: "/works/project-five",
		siteHref: "#",
	},
	{
		id: "project-6",
		title: "Project Six",
		category: "Integrations",
		description: "Placeholder — add your project description here.",
		thumbnail: "",
		tags: ["APIs", "Automation", "Webhooks"],
		hasCaseStudy: false,
		siteHref: "#",
	},
];

const FILTERS = ["All", "Website Development", "Product Design", "App Development", "Integrations", "Content Media Systems", "Music Tech", "Brand Identity"];

const WorksGrid = () => {
	const [activeFilter, setActiveFilter] = useState("All");

	const filtered =
		activeFilter === "All"
			? PROJECTS
			: PROJECTS.filter((p) => p.category === activeFilter);

	const usedCategories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

	return (
		<div className="flex flex-col gap-10">
			{/* Filter bar */}
			<div className="flex flex-wrap gap-2">
				{usedCategories.map((filter) => (
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

			{/* Cards */}
			<motion.div
				layout
				className="flex flex-col gap-3"
			>
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

			{filtered.length === 0 && (
				<p className="text-white/40 text-center py-16">No projects in this category yet.</p>
			)}
		</div>
	);
};

export default WorksGrid;
