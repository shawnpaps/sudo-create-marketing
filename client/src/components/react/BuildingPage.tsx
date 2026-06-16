import { useState, useEffect } from "react";
import { motion } from "motion/react";
import VerticalVideoPlayer from "./VerticalVideoPlayer";
import { getProducts, type Product } from "../../lib/payload";

const HEADLINE_WORDS = ["Stuff", "we're", "building."];

type FallbackProject = {
	name: string;
	category: string;
	description: string;
	status: string;
	tags: string[];
};

const FALLBACK_PROJECTS: FallbackProject[] = [
	{
		name: "Tourpass",
		category: "Music Technology",
		description:
			"A music industry product built from inside the world it serves. Part proof of concept, part operating philosophy.",
		status: "Live",
		tags: ["Product", "Music", "Network"],
	},
	{
		name: "Studio R&D",
		category: "Research",
		description:
			"Small experiments in interface, publishing, media systems, and creative technology.",
		status: "In the lab",
		tags: ["R&D", "Interface", "Systems"],
	},
	{
		name: "Internal Tools",
		category: "Workflow",
		description:
			"Utilities and workflows we build when the off-the-shelf answer is too blunt.",
		status: "In the lab",
		tags: ["Tools", "Automation", "Workflow"],
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
	const [liveProducts, setLiveProducts] = useState<Product[]>([]);
	const [labProducts, setLabProducts] = useState<Product[]>([]);

	useEffect(() => {
		getProducts({ sort: "order", limit: "50" })
			.then(({ docs }) => {
				setLiveProducts(docs.filter((p) => p.status === "live"));
				setLabProducts(
					docs.filter((p) => p.status === "in-lab" || p.status === "open-call"),
				);
			})
			.catch(console.error);
	}, []);

	const hasCmsProducts = liveProducts.length > 0 || labProducts.length > 0;

	return (
		<div className="text-white">
			<section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
				<div className="mb-10">
					<Eyebrow label="Products & R&D" />
				</div>

				<div className="flex flex-col" style={{ gap: "0.05em" }}>
					{HEADLINE_WORDS.map((word, i) => (
						<div key={word} className="overflow-hidden">
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
					The client work is one side of the studio. This is the other:
					R&D, product ideas, internal tools, technical experiments, and
					things we want to see exist.
				</motion.p>
			</section>

			{liveProducts.map((product, idx) => (
				<section key={product.id} className="max-w-6xl mx-auto px-6 pb-24">
					<motion.div
						initial={{ opacity: 0, y: 32 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							delay: 0.4 + idx * 0.1,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative rounded-3xl overflow-hidden"
					>
						<div className="absolute inset-0">
							{product.thumbnail?.url && (
								<img
									src={product.thumbnail.url}
									alt={`${product.name} product artwork`}
									className="w-full h-full object-cover"
								/>
							)}
							<div className="absolute inset-0 bg-black/72" />
						</div>

						<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-20 p-8 md:p-14">
							<div className="flex-1 flex flex-col gap-6">
								<div className="flex items-center gap-3 flex-wrap">
									<span className="inline-flex items-center gap-1.5 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1 rounded-full font-mono">
										<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
										Live
									</span>
									<span className="text-white/40 text-xs uppercase tracking-widest font-mono">
										{product.category}
									</span>
								</div>

								<h2
									className="font-bold leading-none"
									style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
								>
									{product.name}
								</h2>

								<p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-md">
									{product.description}
								</p>

								{product.tags && product.tags.length > 0 && (
									<div className="flex flex-wrap gap-2">
										{product.tags.map(({ id, tag }) => (
											<span
												key={id}
												className="border border-white/20 text-white/60 px-4 py-1.5 rounded-full text-sm"
											>
												{tag}
											</span>
										))}
									</div>
								)}

								<div className="flex items-center gap-4 flex-wrap pt-2">
									{product.caseStudyHref && (
										<a
											href={product.caseStudyHref}
											className="inline-flex items-center gap-2 text-sm font-medium border border-white/25 px-5 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
										>
											Case Study →
										</a>
									)}
									{product.siteHref && (
										<a
											href={product.siteHref}
											className="text-sm text-white/35 font-mono hover:text-white transition-colors duration-300"
										>
											Visit site →
										</a>
									)}
								</div>
							</div>

							{product.playbackId && (
								<div className="relative flex-shrink-0 self-center">
									<div className="absolute inset-0 bg-white/10 blur-3xl rounded-full -z-10" />
									<div className="h-[420px] md:h-[560px] aspect-[9/16]">
										<VerticalVideoPlayer playbackId={product.playbackId} />
									</div>
								</div>
							)}
						</div>
					</motion.div>
				</section>
			))}

			<section className="max-w-6xl mx-auto px-6 pb-32">
				<div className="mb-10">
					<Eyebrow label={hasCmsProducts ? "Also in the lab" : "In the lab"} />
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{hasCmsProducts
						? labProducts.map((item, i) => (
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
											{item.status === "open-call" ? "Open Call" : "In the lab"}
										</span>
										<span className="text-white/25 text-xs uppercase tracking-widest font-mono">
											{item.category}
										</span>
									</div>

									<h3 className="text-2xl font-bold text-white/40">{item.name}</h3>

									<p className="text-white/25 text-sm leading-relaxed">
										{item.description}
									</p>

									{item.status === "open-call" && (
										<a
											href="/contact"
											className="self-start text-xs text-white/30 border border-white/15 px-4 py-2 rounded-full hover:text-white hover:border-white/40 transition-all duration-300 mt-2"
										>
											Let's talk →
										</a>
									)}
								</motion.div>
							))
						: FALLBACK_PROJECTS.map((item, i) => (
								<motion.div
									key={item.name}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: i * 0.1 }}
									className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col gap-4 overflow-hidden"
								>
									<div className="flex items-center gap-2 flex-wrap">
										<span className="border border-white/10 text-white/30 text-xs px-3 py-1 rounded-full font-mono">
											{item.status}
										</span>
										<span className="text-white/25 text-xs uppercase tracking-widest font-mono">
											{item.category}
										</span>
									</div>

									<h3 className="text-2xl font-bold text-white/40">{item.name}</h3>

									<p className="text-white/25 text-sm leading-relaxed">
										{item.description}
									</p>

									<div className="flex flex-wrap gap-2">
										{item.tags.map((tag) => (
											<span
												key={tag}
												className="border border-white/15 text-white/35 px-3 py-1 rounded-full text-xs"
											>
												{tag}
											</span>
										))}
									</div>
								</motion.div>
							))}
				</div>
			</section>
		</div>
	);
};

export default BuildingPage;
