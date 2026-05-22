import { motion } from "motion/react";

type Service = {
	number: string;
	title: string;
	description: string;
	detail: string;
	deliverables: string[];
};

const SERVICES: Service[] = [
	{
		number: "01",
		title: "Content-Driven Websites",
		description:
			"For brands where content is the core product — not an afterthought.",
		detail:
			"We build websites architected around how your audience consumes media: fast, editorial, and built to handle whatever you publish next. For streaming platforms, venues with a story to tell, and media brands launching something new — we build the digital home that holds it all.",
		deliverables: ["Astro", "CMS Integration", "Video Delivery", "Webflow", "Performance", "SEO"],
	},
	{
		number: "02",
		title: "Media & Content Infrastructure",
		description:
			"The delivery layer most brands treat as an afterthought. We build it first.",
		detail:
			"Mux integrations, live and on-demand video pipelines, and content management systems for brands where media is always in motion. From single-stream setups to multi-channel distribution — we handle the infrastructure so the experience lands the way it was intended.",
		deliverables: ["Mux", "Video Delivery", "CMS", "Live Streaming", "HLS / DASH", "API Integration", "Content Distribution"],
	},
	{
		number: "03",
		title: "Visual Media Production",
		description:
			"Not a photographer for hire. Original media, built to serve the work.",
		detail:
			"We shoot and produce original photography and video for brands that need their story told. For media brands, festivals, venues, and experience-driven businesses where the visual story is as important as the build — we create the media that fills the technology we build.",
		deliverables: ["Photography", "Video Production", "Brand Content"],
	},
];

const ServiceBlock = ({ service, index }: { service: Service; index: number }) => (
	<motion.div
		initial={{ opacity: 0, y: 24 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, margin: "-80px" }}
		transition={{ duration: 0.6, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
		className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 border-b border-white/10"
	>
		{/* Left col */}
		<div className="lg:col-span-5 flex flex-col gap-4">
			<div className="flex items-baseline gap-4">
				<span className="text-xs font-mono text-white/25 tabular-nums">{service.number}</span>
				<h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">{service.title}</h2>
			</div>
			<p className="text-white/50 text-base lg:text-lg leading-relaxed italic">
				{service.description}
			</p>
		</div>

		{/* Right col */}
		<div className="lg:col-span-7 flex flex-col gap-6">
			<p className="text-white/70 text-base lg:text-lg leading-relaxed">
				{service.detail}
			</p>
			<div className="flex flex-wrap gap-2">
				{service.deliverables.map((tag) => (
					<span
						key={tag}
						className="border border-white/15 text-white/50 px-4 py-1.5 rounded-full text-sm"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	</motion.div>
);

const ServicesPage = () => (
	<div className="max-w-6xl mx-auto px-6 text-white">
		{/* Page header */}
		<div className="pt-32 pb-16">
			<motion.div
				initial={{ opacity: 0, x: -12 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.45, ease: "easeOut" }}
				className="flex items-center gap-3 mb-10"
			>
				<motion.span
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
					style={{ originX: 0 }}
					className="block w-8 h-px bg-white/30"
				/>
				<span className="text-white/40 text-xs font-mono uppercase tracking-widest">
					What We Build
				</span>
			</motion.div>

			<div className="max-w-3xl flex flex-col gap-6">
				<div className="overflow-hidden">
					<motion.h1
						initial={{ y: "110%" }}
						animate={{ y: 0 }}
						transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
						className="text-5xl md:text-7xl font-bold leading-tight"
					>
						Three things. Done well.
					</motion.h1>
				</div>
				<motion.p
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
					className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl"
				>
					We build the technology that powers media — and we create the media that fills it. Content-driven websites, infrastructure that delivers, and visual production that tells the story.
				</motion.p>
			</div>
		</div>

		{/* Primary services */}
		<div>
			{SERVICES.map((service, i) => (
				<ServiceBlock key={service.number} service={service} index={i} />
			))}
		</div>

		{/* CTA */}
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="py-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-t border-white/10"
		>
			<div className="flex flex-col gap-2">
				<p className="text-white text-2xl font-bold">Ready to build?</p>
				<p className="text-white/40 text-base">Tell us what you're working on.</p>
			</div>
			<a
				href="/contact"
				className="inline-flex items-center gap-2 text-sm font-medium bg-white text-black px-6 py-3.5 rounded-full hover:bg-white/90 transition-colors duration-300"
			>
				Get in touch →
			</a>
		</motion.div>
	</div>
);

export default ServicesPage;
