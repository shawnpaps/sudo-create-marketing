import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { getTestimonials, type Testimonial } from "../../lib/payload";

const SLIDE_DURATION_MS = 7000;

const quoteVariants = {
	enter: (dir: number) => ({
		y: dir > 0 ? 60 : -60,
		opacity: 0,
		filter: "blur(4px)",
	}),
	center: {
		y: 0,
		opacity: 1,
		filter: "blur(0px)",
	},
	exit: (dir: number) => ({
		y: dir > 0 ? -60 : 60,
		opacity: 0,
		filter: "blur(4px)",
	}),
};

const TestimonialsSection = () => {
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const [paused, setPaused] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		getTestimonials()
			.then(({ docs }) => { if (docs.length > 0) setTestimonials(docs); })
			.catch(console.error);
	}, []);

	const go = (next: number, dir: number) => {
		setDirection(dir);
		setIndex(next);
	};

	const prev = () => go((index - 1 + testimonials.length) % testimonials.length, -1);
	const next = () => go((index + 1) % testimonials.length, 1);

	useEffect(() => {
		if (paused || testimonials.length === 0) return;
		timerRef.current = setTimeout(next, SLIDE_DURATION_MS);
		return () => { if (timerRef.current) clearTimeout(timerRef.current); };
	}, [index, paused, testimonials.length]);

	if (testimonials.length === 0) return null;

	const t = testimonials[index];
	const initials = t.name.split(" ").map((w) => w[0]).join("");

	return (
		<section
			className="relative w-full py-40 overflow-hidden text-white"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			{/* Subtle section tint */}
			<div className="absolute inset-0 bg-black/30 pointer-events-none" />

			{/* Top + bottom border lines */}
			<div className="absolute top-0 left-6 right-6 h-px bg-white/10" />
			<div className="absolute bottom-0 left-6 right-6 h-px bg-white/10" />

			{/* Giant decorative quote mark */}
			<div
				aria-hidden
				className="absolute -top-10 left-1/2 -translate-x-1/2 font-bold leading-none select-none pointer-events-none text-white/[0.04]"
				style={{ fontSize: "clamp(16rem, 30vw, 28rem)", lineHeight: 1 }}
			>
				"
			</div>

			<div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center">

				{/* Quote + attribution */}
				<AnimatePresence mode="wait" custom={direction}>
					<motion.div
						key={t.id}
						custom={direction}
						variants={quoteVariants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
						className="flex flex-col items-center gap-10 text-center"
					>
						<blockquote
							className="font-bold leading-snug text-white"
							style={{ fontSize: "clamp(1rem, 1.6vw, 1.35rem)" }}
						>
							"{t.quote}"
						</blockquote>

						{/* Attribution */}
						<motion.div
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.25 }}
							className="flex items-center gap-4"
						>
							<div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-mono text-white/60 flex-shrink-0 select-none">
								{initials}
							</div>
							<div className="text-left">
								<div className="text-white font-semibold text-sm tracking-wide">
									{t.name}
								</div>
								<div className="text-white/40 text-xs mt-0.5 tracking-wide">
									{t.title}, {t.company}
								</div>
							</div>
						</motion.div>
					</motion.div>
				</AnimatePresence>

				{/* Navigation */}
				<div className="mt-16 flex items-center gap-5">
					<button
						onClick={prev}
						aria-label="Previous testimonial"
						className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
					>
						←
					</button>

					{/* Progress dots */}
					<div className="flex items-center gap-2">
						{testimonials.map((_, i) => (
							<button
								key={i}
								onClick={() => go(i, i > index ? 1 : -1)}
								aria-label={`Go to testimonial ${i + 1}`}
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
						aria-label="Next testimonial"
						className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
					>
						→
					</button>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
