import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

type Testimonial = {
	id: string;
	quote: string;
	name: string;
	title: string;
	company: string;
};

const TESTIMONIALS: Testimonial[] = [
	{
		id: "1",
		quote: "Sudo Create didn't just build us a website — they built us a presence. Every decision they made showed they actually understood our brand at a level most agencies never get to.",
		name: "Alex Rivera",
		title: "CEO",
		company: "Tourpass",
	},
	{
		id: "2",
		quote: "The attention to craft is unlike anything I've experienced from a digital studio. They treat every pixel like it matters — because to them, it genuinely does.",
		name: "Jordan Lee",
		title: "Creative Director",
		company: "Studio Null",
	},
	{
		id: "3",
		quote: "We'd worked with three agencies before Sudo Create. None of them understood that technology and culture aren't separate things. These guys get it.",
		name: "Marcus Webb",
		title: "Founder",
		company: "Redline Media",
	},
	{
		id: "4",
		quote: "From the first call it was clear they actually listened. They pushed back on our ideas when they should have, and the product is so much better because of it.",
		name: "Priya Okafor",
		title: "Head of Product",
		company: "Fieldwork Labs",
	},
	{
		id: "5",
		quote: "Shipping with Sudo Create felt like working with a team that had just as much riding on the outcome as we did. That energy is rare and it shows in the work.",
		name: "Dana Holt",
		title: "Co-Founder",
		company: "Wavefront Audio",
	},
];

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
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const [paused, setPaused] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const go = (next: number, dir: number) => {
		setDirection(dir);
		setIndex(next);
	};

	const prev = () => go((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, -1);
	const next = () => go((index + 1) % TESTIMONIALS.length, 1);

	useEffect(() => {
		if (paused) return;
		timerRef.current = setTimeout(next, SLIDE_DURATION_MS);
		return () => { if (timerRef.current) clearTimeout(timerRef.current); };
	}, [index, paused]);

	const t = TESTIMONIALS[index];
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
							style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
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
						{TESTIMONIALS.map((_, i) => (
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
