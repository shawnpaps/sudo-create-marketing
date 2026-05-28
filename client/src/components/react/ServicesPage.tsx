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
		title: "Visual Media Production",
		description:
			"The content and the container, designed together from day one.",
		detail:
			"Brand, commercial, and music industry photography and videography. When we shoot for a client, we're already thinking about how it loads on the page — because we're often building that page too. No stock photos, no visual mismatch. The same creative vision carries from the shoot through delivery.",
		deliverables: ["Photography", "Videography", "Brand", "Commercial", "Music Industry"],
	},
	{
		number: "02",
		title: "Audio/Visual Post Production",
		description:
			"We finish what we shoot — and what you bring us.",
		detail:
			"Video editing, audio editing, and audio mixing. Post production that understands both the creative vision and how the final cut needs to perform in a digital environment. We edit the video and build the player — content and delivery designed as one.",
		deliverables: ["Video Editing", "Audio Editing", "Audio Mixing"],
	},
	{
		number: "03",
		title: "Content-Driven Websites",
		description:
			"Built for brands where visuals do the heavy lifting.",
		detail:
			"Not templated. Websites designed from the ground up around the media and content that make a brand what it is. When we build a site, we often have the content in hand — because we shot it. The result is a digital presence where nothing feels bolted on.",
		deliverables: ["Astro", "React", "CMS Integration", "Video Delivery", "Performance", "SEO"],
	},
	{
		number: "04",
		title: "Media-First Infrastructure & Software",
		description:
			"The systems that keep your content moving.",
		detail:
			"React/web apps, Mux video integration, content management systems, streaming infrastructure, custom workflows, and third-party integrations. Built for brands that run on content — where the delivery system matters as much as what's being delivered.",
		deliverables: ["React", "Mux", "CMS", "Live Streaming", "APIs", "Custom Workflows", "Third-party Integrations"],
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
					Services
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
						The full chain.
					</motion.h1>
				</div>
				<motion.p
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
					className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl"
				>
					Most studios stop at one layer. Sudo Create covers the whole thing — production, post, websites, and infrastructure. These aren't separate services you mix and match; they're a connected system. Some clients come with nothing. Some have content but no site. Some have a site but need the infrastructure. We meet you where you are.
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
				<p className="text-white text-2xl font-bold">Let's build something.</p>
				<p className="text-white/40 text-base">Tell us where you are in the process.</p>
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
