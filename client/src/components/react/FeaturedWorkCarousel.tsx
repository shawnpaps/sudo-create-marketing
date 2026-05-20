import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import FeaturedWork, { type FeaturedWorkProps } from "./FeaturedWork";

const PROJECTS: FeaturedWorkProps[] = [
	{
		label: "Music Tech",
		title: "Tourpass",
		description:
			"A revolutionary platform designed to help music industry professionals network like never before.",
		href: "#",
		playbackId: "JF3BNVZKDg2lNHEMUMveAwRtWuGO21zhXJAQvqgorls",
		hasCaseStudy: true,
	},
	{
		label: "Brand Identity",
		title: "Project Two",
		description: "Placeholder — swap in your second project's copy here.",
		href: "#",
		playbackId: "a4nOgmxGWg6gULfcBbAa00gXyfcwPnAFldF8RdsNyk8M",
	},
	{
		label: "Digital Experience",
		title: "Project Three",
		description: "Placeholder — swap in your third project's copy here.",
		href: "#",
		playbackId: "a4nOgmxGWg6gULfcBbAa00gXyfcwPnAFldF8RdsNyk8M",
	},
];

const SLIDE_DURATION_MS = 6000;

const variants = {
	enter: (dir: number) => ({
		x: dir > 0 ? 120 : -120,
		opacity: 0,
		scale: 0.97,
	}),
	center: {
		x: 0,
		opacity: 1,
		scale: 1,
	},
	exit: (dir: number) => ({
		x: dir > 0 ? -120 : 120,
		opacity: 0,
		scale: 0.97,
	}),
};

const FeaturedWorkCarousel = () => {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const [paused, setPaused] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const go = (nextIndex: number, dir: number) => {
		setDirection(dir);
		setIndex(nextIndex);
	};

	const next = () => go((index + 1) % PROJECTS.length, 1);
	const prev = () => go((index - 1 + PROJECTS.length) % PROJECTS.length, -1);

	useEffect(() => {
		if (paused) return;
		timerRef.current = setTimeout(next, SLIDE_DURATION_MS);
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, [index, paused]);

	return (
		<div
			className="relative w-full"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div className="overflow-hidden">
				<AnimatePresence mode="wait" custom={direction}>
					<motion.div
						key={index}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
					>
						<FeaturedWork {...PROJECTS[index]} />
					</motion.div>
				</AnimatePresence>
			</div>

			<div className="mt-10 flex items-center justify-center gap-4">
				<button
					onClick={prev}
					aria-label="Previous project"
					className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
				>
					←
				</button>

				<div className="flex items-center gap-2">
					{PROJECTS.map((_, i) => (
						<button
							key={i}
							onClick={() => go(i, i > index ? 1 : -1)}
							aria-label={`Go to project ${i + 1}`}
							className="relative h-1.5 rounded-full bg-white/20 overflow-hidden transition-all duration-500"
							style={{ width: i === index ? 32 : 12 }}
						>
							{i === index && (
								<motion.div
									key={`progress-${index}`}
									className="absolute inset-y-0 left-0 bg-white rounded-full"
									initial={{ width: "0%" }}
									animate={{ width: paused ? "0%" : "100%" }}
									transition={{
										duration: paused ? 0 : SLIDE_DURATION_MS / 1000,
										ease: "linear",
									}}
								/>
							)}
						</button>
					))}
				</div>

				<button
					onClick={next}
					aria-label="Next project"
					className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
				>
					→
				</button>
			</div>
		</div>
	);
};

export default FeaturedWorkCarousel;
