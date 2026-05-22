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
		description: "For brands where content is the core product — not an afterthought.",
		detail:
			"We build websites architected around how your audience consumes media: fast, editorial, and built to handle whatever you publish next. Whether you're a streaming platform, a venue with a story to tell, or a media brand launching something new — we build the digital home that holds it all.",
		deliverables: ["Astro", "CMS Integration", "Video Delivery", "Webflow", "Performance", "SEO"],
	},
	{
		number: "02",
		title: "Media Infrastructure & Streaming",
		description: "Your audience shouldn't have to think about the technology. Neither should you.",
		detail:
			"We build live and on-demand video delivery systems that just work — from single-stream setups to multi-channel pipelines. Powered by Mux, built for reliability at scale. Whether you're a festival going live for the first time or a media platform scaling your catalog, we handle the delivery layer so the experience lands the way it was intended.",
		deliverables: ["Mux", "Live Streaming", "Video Delivery", "HLS / DASH", "CDN", "API Integration"],
	},
	{
		number: "03",
		title: "Apps & Custom Software",
		description: "Off-the-shelf software makes assumptions about how you work. We build tools that don't.",
		detail:
			"Whether you're a creative director managing a content pipeline, a marketing team that needs a custom campaign tool, or a technical director running a media operation — we build software that fits your workflow. Web apps, mobile apps, internal platforms. Purpose-built from the ground up.",
		deliverables: ["React Native", "iOS", "Android", "Web Apps", "API Integration"],
	},
	{
		number: "04",
		title: "Content Systems",
		description: "The infrastructure keeping your media moving is as important as the media itself.",
		detail:
			"We build the CMS setups, automation pipelines, and distribution systems that keep content organized, consistent, and flowing across every channel you publish to. Built to scale with the way you work — not the way someone else assumed you would.",
		deliverables: ["CMS", "Automation", "Webhooks", "Content Distribution", "REST & GraphQL APIs", "Third-party Integrations"],
	},
	{
		number: "05",
		title: "Visual Media Production",
		description: "For brands that need their story told, not just designed.",
		detail:
			"Original photography and video, made with the same precision we bring to every technology build. We work with media companies, venues, festivals, and experience-driven businesses where the image carries weight — and where craft is the differentiator. This isn't a commodity service. It's what happens when a technology studio that cares about every frame picks up a camera.",
		deliverables: ["Photography", "Video Production", "Brand Media", "Event Coverage", "Editorial"],
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
		<div className="lg:col-span-5 flex flex-col gap-4">
			<div className="flex items-baseline gap-4">
				<span className="text-xs font-mono text-white/25 tabular-nums">{service.number}</span>
				<h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">{service.title}</h2>
			</div>
			<p className="text-white/50 text-base lg:text-lg leading-relaxed italic">
				{service.description}
			</p>
		</div>

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
						Built around media.
					</motion.h1>
				</div>
				<motion.p
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
					className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl"
				>
					We build the technology that powers media — and we create the media that fills it.
				</motion.p>
			</div>
		</div>

		<div>
			{SERVICES.map((service, i) => (
				<ServiceBlock key={service.number} service={service} index={i} />
			))}
		</div>

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
