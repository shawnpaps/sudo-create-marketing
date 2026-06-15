import { motion } from "motion/react";

type HeroProps = {
	heading: string;
	subtext: string;
	location?: string;
};

const Hero = ({ heading, subtext, location }: HeroProps) => {
	const eyebrow = location ?? "Creative Studio | Tampa Bay";
	const headingLines =
		heading === "Look like the place people want to be."
			? ["Look like the place", "people want to be."]
			: [heading];

	return (
		<section className="relative min-h-screen flex flex-col text-white max-w-6xl mx-auto px-6">
			<div className="flex-1 flex items-center justify-center text-center py-28">
				<div className="flex flex-col items-center max-w-5xl">
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, ease: "easeOut" }}
						className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-sm"
					>
						<motion.span
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
							style={{ originX: 0 }}
							className="block w-8 h-px bg-white/30"
						/>
						<span className="text-white/40 text-xs font-mono uppercase tracking-widest">
							{eyebrow}
						</span>
					</motion.div>

					<div className="flex flex-col items-center gap-2 md:gap-3">
						{headingLines.map((line, i) => (
							<div key={i} className="overflow-hidden">
								<motion.h1
									initial={{ y: "105%" }}
									animate={{ y: 0 }}
									transition={{
										duration: 0.85,
										delay: 0.12 + i * 0.1,
										ease: [0.22, 1, 0.36, 1],
									}}
									className="font-bold leading-[0.92] tracking-tight text-center"
									style={{ fontSize: "clamp(3.25rem, 8vw, 7.25rem)" }}
								>
									{line}
								</motion.h1>
							</div>
						))}
					</div>

					<motion.p
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
						className="text-white/65 text-base md:text-xl leading-relaxed max-w-2xl mt-8"
					>
						{subtext}
					</motion.p>

					<motion.a
						href="/contact"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.58, ease: "easeOut" }}
						className="inline-flex items-center gap-2 mt-9 rounded-full border border-white/25 bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_20px_80px_rgba(255,255,255,0.12)] hover:bg-white/90 transition-colors duration-300"
					>
						Start a project →
					</motion.a>
				</div>
			</div>

			{/* Bottom row — scroll indicator */}
			<div className="pb-14 flex justify-center">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.9, duration: 0.6 }}
					className="flex-shrink-0 flex flex-col items-center gap-2"
				>
					<span className="text-white/25 text-[10px] font-mono uppercase tracking-widest">
						Scroll
					</span>
					<motion.div
						animate={{ scaleY: [1, 0.4, 1], opacity: [0.3, 0.8, 0.3] }}
						transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
						style={{ originY: 0 }}
						className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
