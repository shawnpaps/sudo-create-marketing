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
		id: "web",
		number: "01",
		title: "Digital Experiences",
		description:
			"Websites built to function as the front door to your entire brand — not just a page, but a presence. Designed for experience-driven brands that can't afford to look ordinary.",
		deliverables: [
			"Astro",
			"Content Management",
			"Webflow",
			"Framer",
			"CMS Integration",
		],
	},
	{
		id: "design",
		number: "02",
		title: "Product Design",
		description:
			"Interfaces designed for the way your audience actually feels — not just how they navigate. We build products that carry your brand's sensibility into every interaction.",
		deliverables: ["UI / UX", "Design Systems", "Figma", "Prototyping"],
	},
	{
		id: "app",
		number: "03",
		title: "App Development",
		description:
			"Mobile applications built with the same attention to detail as everything else we make. From concept to launch, nothing ships until it feels right.",
		deliverables: ["React Native", "iOS", "Android", "API Integration"],
	},
	{
		id: "integrations",
		number: "04",
		title: "Content Infrastructure",
		description:
			"The systems behind your brand should work as seamlessly as the experience in front of it. We connect your tools, platforms, and data streams into one unified infrastructure.",
		deliverables: [
			"REST & GraphQL APIs",
			"Webhooks",
			"Automation",
			"AI Integrations",
			"Third-party Services",
		],
	},
	{
		id: "content",
		number: "05",
		title: "Visual Storytelling",
		description:
			"From on-site production to custom media pipelines — we capture and distribute the content that makes your brand feel real. Photography, video, and the infrastructure to put it everywhere.",
		deliverables: [
			"Photography",
			"Videography",
			"Video Infrastructure",
			"Streaming Technology",
			"CMS",
			"Content Strategy",
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
