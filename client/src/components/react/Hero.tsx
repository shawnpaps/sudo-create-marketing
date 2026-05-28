import { motion } from "motion/react";

type HeroProps = {
	heading: string;
	subtext: string;
	location?: string;
};

const Hero = ({ heading, subtext, location }: HeroProps) => {
	const words = heading.split(" ");

	return (
		<section className="relative min-h-screen flex flex-col text-white max-w-6xl mx-auto px-6">
			{/* Eyebrow */}
			<div className="pt-10 h-20 flex items-center">
				{location ? (
					<motion.div
						initial={{ opacity: 0, x: -12 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, ease: "easeOut" }}
						className="flex items-center gap-3"
					>
						<motion.span
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
							style={{ originX: 0 }}
							className="block w-8 h-px bg-white/30"
						/>
						<span className="text-white/40 text-xs font-mono uppercase tracking-widest">
							{location}
						</span>
					</motion.div>
				) : (
					<motion.div
						initial={{ opacity: 0, x: -12 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, ease: "easeOut" }}
						className="flex items-center gap-3"
					>
						<motion.span
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
							style={{ originX: 0 }}
							className="block w-8 h-px bg-white/30"
						/>
						<span className="text-white/40 text-xs font-mono uppercase tracking-widest">
							Media Technology Studio · Tampa, FL
						</span>
					</motion.div>
				)}
			</div>

			{/* Headline — vertically centered in remaining space */}
			<div className="flex-1 flex items-center">
				<div className="flex flex-col">
					<div className="flex flex-col" style={{ gap: "0.05em" }}>
						{words.map((word, i) => (
							<div key={i} className="overflow-hidden">
								<motion.h1
									initial={{ y: "110%" }}
									animate={{ y: 0 }}
									transition={{
										duration: 0.9,
										delay: 0.12 + i * 0.13,
										ease: [0.22, 1, 0.36, 1],
									}}
									className="font-bold leading-[0.88] p-4"
									style={{ fontSize: "clamp(2.5rem, 11vw, 9.5rem)" }}
								>
									{word}
								</motion.h1>
							</div>
						))}
					</div>

					<motion.p
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
						className="text-white/30 text-xs font-mono mt-5 tracking-wide"
					>
						// sudo [su·do] — superuser do. elevated access, unlimited output.
					</motion.p>
				</div>
			</div>

			{/* Bottom row — subtext left, scroll indicator right */}
			<div className="pb-14 flex items-end justify-between gap-10">
				<motion.p
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
					className="text-white/50 text-lg leading-relaxed max-w-md"
				>
					{subtext}
				</motion.p>

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
