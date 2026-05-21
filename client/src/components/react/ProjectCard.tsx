import React from "react";
import { motion } from "motion/react";

export type Project = {
	id: string;
	title: string;
	category: string;
	description: string;
	thumbnail: string;
	tags: string[];
	hasCaseStudy: boolean;
	caseStudyHref?: string;
	siteHref?: string;
};

const waveVariants = {
	initial: { clipPath: "inset(0 100% 0 0)" },
	hover: {
		clipPath: "inset(0 0% 0 0)",
		transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
	},
};

const contentVariants = {
	initial: { opacity: 0, x: -24 },
	hover: {
		opacity: 1,
		x: 0,
		transition: { delay: 0.18, duration: 0.4, ease: "easeOut" },
	},
};

const ProjectCard = ({ project }: { project: Project }) => {
	const href = project.hasCaseStudy
		? project.caseStudyHref
		: project.siteHref;

	return (
		<motion.a
			href={href ?? "#"}
			initial="initial"
			whileHover="hover"
			className="relative block w-full h-56 rounded-2xl overflow-hidden cursor-pointer group"
		>
			{/* Background image */}
			{project.thumbnail && (
				<img
					src={project.thumbnail}
					alt={project.title}
					className="absolute inset-0 w-full h-full object-cover"
				/>
			)}

			{/* Dark scrim */}
			<div className="absolute inset-0 bg-black/50" />

			{/* Fallback gradient when no image */}
			{!project.thumbnail && (
				<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/[0.03]" />
			)}

			{/* Meta row */}
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between px-7 pt-6 z-10">
				<span className="text-white/40 text-xs uppercase tracking-widest">
					{project.category}
				</span>
				{project.hasCaseStudy && (
					<span className="flex items-center gap-1.5 border border-white/25 text-white/60 text-xs px-2.5 py-1 rounded-full">
						<span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
						Case Study
					</span>
				)}
			</div>

			{/* Description + large project name */}
			<div className="absolute inset-0 flex flex-col items-start justify-end px-7 pb-5 gap-1.5">
				<p className="text-white/60 text-sm leading-snug max-w-lg line-clamp-2">
					{project.description}
				</p>
				<h3 className="text-white/20 font-bold leading-none select-none"
					style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
					{project.title}
				</h3>
			</div>

			{/* Wave overlay */}
			<motion.div
				variants={waveVariants}
				className="absolute inset-0 bg-white flex items-center justify-center"
			>
				<motion.div
					variants={contentVariants}
					className="flex items-center gap-3 md:gap-5 text-black"
				>
					<span className="font-bold leading-none text-5xl md:text-[5rem]">
						→
					</span>
					<span className="text-xl md:text-3xl font-bold tracking-tight">
						{project.hasCaseStudy ? "see the case study" : "see the project"}
					</span>
				</motion.div>
			</motion.div>
		</motion.a>
	);
};

export default ProjectCard;
