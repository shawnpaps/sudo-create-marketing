import { motion } from "motion/react";
import VerticalVideoPlayer from "./VerticalVideoPlayer";

const TOURPASS_TAGS = ["React Native", "Node.js", "Product Design", "iOS & Android"];

const HEADLINE_WORDS = ["Stuff", "we're", "building."];

type LabSlot = {
	id: string;
	name: string;
	category: string;
	description: string;
	isOpenCall?: boolean;
};

const LAB_SLOTS: LabSlot[] = [
	{
		id: "lab-1",
		name: "Project Helix",
		category: "Dev Tools",
		description:
			"Internal tooling for faster client delivery. Turning our own workflow into a product.",
	},
	{
		id: "lab-2",
		name: "???",
		category: "AI / Automation",
		description: "Something we're not ready to talk about yet. Stay tuned.",
	},
	{
		id: "lab-3",
		name: "Open Call",
		category: "R&D",
		description:
			"Have a product idea that needs a technical co-founder? Let's build it together.",
		isOpenCall: true,
	},
];

const Eyebrow = ({ label }: { label: string }) => (
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
			transition={{ duration: 0.4, delay: 0.1 }}
			style={{ originX: 0 }}
			className="block w-8 h-px bg-white/30"
		/>
		<span className="text-white/40 text-xs font-mono uppercase tracking-widest">
			{label}
		</span>
	</motion.div>
);

const BuildingPage = () => {
	return (
		<div className="text-white">
			{/* ── Page header ───────────────────────────────────────── */}
			<section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
				<div className="mb-10">
					<Eyebrow label="Our Products & R&D" />
				</div>

				<div className="flex flex-col" style={{ gap: "0.05em" }}>
					{HEADLINE_WORDS.map((word, i) => (
						<div key={i} className="overflow-hidden">
							<motion.h1
								initial={{ y: "110%" }}
								animate={{ y: 0 }}
								transition={{
									duration: 0.9,
									delay: 0.12 + i * 0.13,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="font-bold leading-[0.88]"
								style={{ fontSize: "clamp(2.5rem, 10vw, 8.5rem)" }}
							>
								{word}
							</motion.h1>
						</div>
					))}
				</div>

				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
					className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mt-10"
				>
					Products, tools, and experiments we build for ourselves — and anyone
					who needs them. No clients. No briefs. Just things we think should
					exist.
				</motion.p>
			</section>

			{/* ── Tourpass ──────────────────────────────────────────── */}
			<section className="max-w-6xl mx-auto px-6 pb-24">
				<motion.div
					initial={{ opacity: 0, y: 32 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
					className="relative rounded-3xl overflow-hidden"
				>
					{/* Background */}
					<div className="absolute inset-0">
						<img
							src="/tourpass.png"
							alt=""
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/72" />
					</div>

					{/* Card content */}
					<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-20 p-8 md:p-14">
						{/* Left: text */}
						<div className="flex-1 flex flex-col gap-6">
							{/* Status + category */}
							<div className="flex items-center gap-3 flex-wrap">
								<span className="inline-flex items-center gap-1.5 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1 rounded-full font-mono">
									<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
									Live
								</span>
								<span className="text-white/40 text-xs uppercase tracking-widest font-mono">
									Music Tech
								</span>
							</div>

							{/* Name */}
							<h2
								className="font-bold leading-none"
								style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
							>
								Tourpass
							</h2>

							{/* Tagline */}
							<p className="text-white/45 text-xs uppercase tracking-widest font-mono">
								The professional network for live music.
							</p>

							{/* Description */}
							<p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-md">
								A platform built for music industry professionals — connecting
								artists, agents, bookers, and venues in one seamless ecosystem.
								Built to solve the fragmented, email-chain reality of booking and
								touring.
							</p>

							{/* Tags */}
							<div className="flex flex-wrap gap-2">
								{TOURPASS_TAGS.map((tag) => (
									<span
										key={tag}
										className="border border-white/20 text-white/60 px-4 py-1.5 rounded-full text-sm"
									>
										{tag}
									</span>
								))}
							</div>

							{/* CTAs */}
							<div className="flex items-center gap-4 flex-wrap pt-2">
								<a
									href="/works/tourpass"
									className="inline-flex items-center gap-2 text-sm font-medium border border-white/25 px-5 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
								>
									Case Study →
								</a>
								<a
									href="#"
									className="text-sm text-white/35 font-mono hover:text-white transition-colors duration-300"
								>
									Visit site →
								</a>
							</div>
						</div>

						{/* Right: video */}
						<div className="relative flex-shrink-0 self-center">
							<div className="absolute inset-0 bg-white/10 blur-3xl rounded-full -z-10" />
							<div className="h-[420px] md:h-[560px] aspect-[9/16]">
								<VerticalVideoPlayer playbackId="JF3BNVZKDg2lNHEMUMveAwRtWuGO21zhXJAQvqgorls" />
							</div>
						</div>
					</div>
				</motion.div>
			</section>

			{/* ── In the lab ────────────────────────────────────────── */}
			<section className="max-w-6xl mx-auto px-6 pb-32">
				<div className="mb-10">
					<Eyebrow label="Also in the lab" />
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{LAB_SLOTS.map((item, i) => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col gap-4 overflow-hidden"
						>
							<div className="flex items-center gap-2 flex-wrap">
								<span className="border border-white/10 text-white/30 text-xs px-3 py-1 rounded-full font-mono">
									In the lab
								</span>
								<span className="text-white/25 text-xs uppercase tracking-widest font-mono">
									{item.category}
								</span>
							</div>

							<h3 className="text-2xl font-bold text-white/40">{item.name}</h3>

							<p className="text-white/25 text-sm leading-relaxed">
								{item.description}
							</p>

							{item.isOpenCall && (
								<a
									href="/contact"
									className="self-start text-xs text-white/30 border border-white/15 px-4 py-2 rounded-full hover:text-white hover:border-white/40 transition-all duration-300 mt-2"
								>
									Let's talk →
								</a>
							)}
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
};

export default BuildingPage;
