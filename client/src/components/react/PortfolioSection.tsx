import React from "react";
import { motion } from "motion/react";

const PortfolioSection = () => (
	<section id="portfolio" className="relative w-full overflow-hidden text-white">
		{/* Lens background */}
		<div className="absolute inset-0">
			<img
				src="/lens-background.jpg"
				alt="Cinematic background for Sudo Create creative work"
				className="w-full h-full object-cover"
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
		</div>

		<div className="relative max-w-6xl mx-auto px-6 py-32 md:py-48 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
			<div className="flex flex-col gap-5">
				<motion.div
					initial={{ opacity: 0, x: -12 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45 }}
					className="flex items-center gap-3"
				>
					<motion.span
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
						style={{ originX: 0 }}
						className="block w-8 h-px bg-white/40"
					/>
					<span className="text-white/40 text-xs font-mono tracking-widest uppercase">
						Website Media
					</span>
				</motion.div>

				<motion.h2
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
					className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-xl"
				>
					Media built for the website.
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
					className="text-white/50 text-base lg:text-lg leading-relaxed max-w-md"
				>
					Photography, video, and visual direction for brands that need the site to feel lived in, specific, and worth paying attention to.
				</motion.p>
			</div>

			<motion.a
				href="https://portfolio.sudocreate.studio"
				target="_blank"
				rel="noopener noreferrer"
				initial={{ opacity: 0, y: 12 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.3 }}
				className="self-start md:self-auto inline-flex items-center gap-3 border border-white/20 px-7 py-4 rounded-full text-white font-medium hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
			>
				View media work →
			</motion.a>
		</div>
	</section>
);

export default PortfolioSection;
