import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Service = {
	id: string;
	number: string;
	title: string;
	description: string;
	deliverables: string[];
};

const SERVICES: Service[] = [
	{
		id: "visual",
		number: "01",
		title: "Visual Media Production",
		description:
			"Photography and videography for brand, commercial, and music industry work. The content we shoot feeds directly into the websites and software we build — created together from the start.",
		deliverables: [
			"Photography",
			"Videography",
			"Brand",
			"Commercial",
			"Music Industry",
		],
	},
	{
		id: "post",
		number: "02",
		title: "Audio/Visual Post Production",
		description:
			"Video editing, audio editing, and audio mixing. Post production that understands both the creative vision and how the final cut needs to perform in a digital environment.",
		deliverables: [
			"Video Editing",
			"Audio Editing",
			"Audio Mixing",
		],
	},
	{
		id: "web",
		number: "03",
		title: "Content-Driven Websites",
		description:
			"Websites built around media from the ground up — not templated. Designed for brands where visuals do the heavy lifting, and built around the content we create together.",
		deliverables: [
			"Astro",
			"React",
			"CMS Integration",
			"Video Delivery",
			"Performance",
			"SEO",
		],
	},
	{
		id: "infra",
		number: "04",
		title: "Media-First Infrastructure & Software",
		description:
			"React/web apps, Mux video integration, content management systems, streaming infrastructure, and third-party integrations. Built for brands that run on content.",
		deliverables: [
			"React",
			"Mux",
			"CMS",
			"Live Streaming",
			"APIs",
			"Custom Workflows",
		],
	},
];

const detailVariants = {
	enter: { y: 24, opacity: 0 },
	center: { y: 0, opacity: 1 },
	exit: { y: -24, opacity: 0 },
};

const ServicesSection = () => {
	const [active, setActive] = useState(0);

	return (
		<div className="flex flex-col gap-16 lg:flex-row lg:gap-24 items-start">
			{/* Left — service list */}
			<div className="flex-1 flex flex-col">
				{SERVICES.map((service, i) => {
					const isActive = active === i;
					return (
						<motion.button
							key={service.id}
							onClick={() => setActive(i)}
							initial={{ opacity: 0, x: -16 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
							className="group flex items-center justify-between py-6 border-b border-white/10 text-left w-full cursor-pointer"
						>
							<div className="flex items-baseline gap-5">
								<motion.span
									animate={{
										color: isActive
											? "rgba(255,255,255,0.35)"
											: "rgba(255,255,255,0.2)",
									}}
									className="text-xs font-mono tabular-nums"
								>
									{service.number}
								</motion.span>
								<motion.span
									animate={{
										color: isActive
											? "rgba(255,255,255,1)"
											: "rgba(255,255,255,0.4)",
									}}
									transition={{ duration: 0.2 }}
									className="text-xl lg:text-2xl font-bold leading-tight"
								>
									{service.title}
								</motion.span>
							</div>

							<motion.span
								animate={{
									x: isActive ? 0 : -6,
									opacity: isActive ? 1 : 0,
								}}
								transition={{ duration: 0.2 }}
								className="text-white text-lg"
							>
								→
							</motion.span>
						</motion.button>
					);
				})}
			</div>

			{/* Right — detail panel */}
			<div className="w-full lg:w-[45%] lg:flex-shrink-0 lg:sticky lg:top-32">
				<AnimatePresence mode="wait">
					<motion.div
						key={active}
						variants={detailVariants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
						className="flex flex-col gap-6"
					>
						<span className="text-[80px] lg:text-[120px] font-bold leading-none text-white/5 select-none -mb-4">
							{SERVICES[active].number}
						</span>

						<h3 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
							{SERVICES[active].title}
						</h3>

						<p className="text-white/60 text-base lg:text-lg leading-relaxed">
							{SERVICES[active].description}
						</p>

						<div className="flex flex-wrap gap-2 pt-2">
							{SERVICES[active].deliverables.map((tag, i) => (
								<motion.span
									key={tag}
									initial={{ opacity: 0, y: 8 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.06, duration: 0.3 }}
									className="border border-white/20 text-white/70 px-4 py-1.5 rounded-full text-sm"
								>
									{tag}
								</motion.span>
							))}
						</div>

						<motion.a
							href="/services"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.25 }}
							className="self-start inline-flex items-center gap-2 text-sm font-medium border border-white/20 px-5 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 mt-2"
						>
							Learn more →
						</motion.a>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ServicesSection;
