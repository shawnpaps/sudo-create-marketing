import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MuxPlayer from "@mux/mux-player-react";

const PLAYBACK_ID = "Nyp500Sn01UNJTG4LcTlcOj901ASU502rQCsMn0002zDUpyCg";

const HEADLINE_LINES = ["Before the code,", "there was a camera.", "There still is."];

const BODY_COPY = [
	"Shawn Paps started behind a camera and a mixing board — photographing bands, engineering records deep in Florida's metal underground. That world taught him what it means to care obsessively about craft: how an image carries feeling before a word is read, how a mix either hits or it doesn't.",
	"Sudo Create is built on that foundation. The same instincts that drive the shoot drive the code — because at this studio, it's the same person doing both. We produce the content, handle post, and build the infrastructure that delivers it. One creative vision, from the shoot to the screen.",
];

const AboutSection = () => {
	const [showOverlay, setShowOverlay] = useState(true);

	return (
		<section className="relative w-full min-h-screen overflow-hidden">
			{/* Background video */}
			<div className="absolute inset-0">
				<MuxPlayer
					playbackId={PLAYBACK_ID}
					autoPlay="muted"
					loop
					muted
					playsInline
					thumbnailTime={2}
					style={
						{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							"--media-object-fit": "cover",
							display: "block",
						} as React.CSSProperties
					}
				/>
			</div>

			{/* Permanent base scrim */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 pointer-events-none" />

			{/* Overlay — founder content */}
			<AnimatePresence>
				{showOverlay && (
					<motion.div
						key="overlay"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.65, ease: "easeInOut" }}
						className="absolute inset-0 z-10 flex flex-col justify-end pointer-events-none"
					>
						{/* Readability scrim */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

						{/* Large founder photo — right side */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.9,
								delay: 0.3,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="absolute bottom-24 lg:bottom-0 right-0 w-[180px] sm:w-[260px] lg:w-[420px] h-[380px] sm:h-[500px] lg:h-[700px]"
						>
							<img
								src="/headshot.jpg"
								alt="Shawn Papineau"
								className="w-full h-full object-cover object-top"
							/>
							{/* Fade into background on all edges */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
							<div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
						</motion.div>

						{/* Text content */}
						<div className="relative max-w-6xl mx-auto px-6 pb-20 lg:pb-32 text-white w-full">
							{/* Eyebrow */}
							<motion.div
								initial={{ opacity: 0, x: -12 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.45, delay: 0.1 }}
								className="flex items-center gap-3 mb-10"
							>
								<motion.span
									initial={{ scaleX: 0 }}
									animate={{ scaleX: 1 }}
									transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
									style={{ originX: 0 }}
									className="block w-8 h-px bg-white/40"
								/>
								<span className="text-white/40 text-xs font-mono tracking-widest uppercase">
									Who we are
								</span>
							</motion.div>

							{/* Headline */}
							<div className="flex flex-col gap-0.5 mb-10 max-w-3xl">
								{HEADLINE_LINES.map((line, i) => (
									<div key={i} className="overflow-hidden">
										<motion.h2
											initial={{ y: "110%" }}
											animate={{ y: 0 }}
											transition={{
												duration: 0.85,
												delay: 0.18 + i * 0.11,
												ease: [0.22, 1, 0.36, 1],
											}}
											className="text-4xl sm:text-5xl xl:text-7xl font-bold leading-tight"
										>
											{line}
										</motion.h2>
									</div>
								))}
							</div>

							{/* Body + signature */}
							<div className="flex flex-col gap-4 max-w-lg">
								{BODY_COPY.map((para, i) => (
									<motion.p
										key={i}
										initial={{ opacity: 0, y: 14 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.55,
											delay: 0.5 + i * 0.13,
											ease: "easeOut",
										}}
										className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed"
									>
										{para}
									</motion.p>
								))}

								{/* Founder name */}
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.82, ease: "easeOut" }}
									className="flex items-center gap-3 pt-2 border-t border-white/10 mt-2"
								>
									<div className="text-white font-semibold text-sm tracking-wide">
										Shawn Papineau
									</div>
									<span className="text-white/30 text-xs">·</span>
									<div className="text-white/40 text-xs tracking-wide">
										Founder, Sudo Create
									</div>
								</motion.div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Toggle — always visible */}
			<motion.button
				onClick={() => setShowOverlay((v) => !v)}
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.96 }}
				className="absolute bottom-8 right-8 z-20 flex items-center gap-2 text-sm border border-white/25 px-5 py-2.5 rounded-full text-white backdrop-blur-sm cursor-pointer hover:bg-white hover:text-black transition-colors duration-300"
			>
				<AnimatePresence mode="wait">
					{showOverlay ? (
						<motion.span
							key="watch"
							initial={{ opacity: 0, y: 4 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -4 }}
							transition={{ duration: 0.2 }}
							className="flex items-center gap-2"
						>
							Watch <span className="opacity-50 text-xs">▶</span>
						</motion.span>
					) : (
						<motion.span
							key="read"
							initial={{ opacity: 0, y: 4 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -4 }}
							transition={{ duration: 0.2 }}
							className="flex items-center gap-2"
						>
							Our Story <span className="opacity-50 text-xs">→</span>
						</motion.span>
					)}
				</AnimatePresence>
			</motion.button>
		</section>
	);
};

export default AboutSection;
