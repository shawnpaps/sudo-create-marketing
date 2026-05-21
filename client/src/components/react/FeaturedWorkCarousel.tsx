import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import FeaturedWork from "./FeaturedWork";
import { getFeaturedWorks, type Work } from "../../lib/payload";

const SLIDE_DURATION_MS = 6000;

const variants = {
	enter: (dir: number) => ({
		x: dir > 0 ? 120 : -120,
		opacity: 0,
		scale: 0.97,
	}),
	center: { x: 0, opacity: 1, scale: 1 },
	exit: (dir: number) => ({
		x: dir > 0 ? -120 : 120,
		opacity: 0,
		scale: 0.97,
	}),
};

const FeaturedWorkCarousel = () => {
	const [works, setWorks] = useState<Work[]>([]);
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const [paused, setPaused] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		getFeaturedWorks()
			.then(({ docs }) => setWorks(docs))
			.catch(console.error);
	}, []);

	const go = (nextIndex: number, dir: number) => {
		setDirection(dir);
		setIndex(nextIndex);
	};

	const next = () => go((index + 1) % works.length, 1);
	const prev = () => go((index - 1 + works.length) % works.length, -1);

	useEffect(() => {
		if (paused || works.length === 0) return;
		timerRef.current = setTimeout(next, SLIDE_DURATION_MS);
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, [index, paused, works.length]);

	if (works.length === 0) return null;

	const current = works[index];

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
						<FeaturedWork
							label={current.label}
							title={current.title}
							description={current.description}
							href={current.caseStudyHref ?? current.siteHref ?? "#"}
							playbackId={current.playbackId ?? ""}
							hasCaseStudy={current.hasCaseStudy}
							thumbnail={current.thumbnail?.url ?? undefined}
						/>
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
					{works.map((_, i) => (
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
