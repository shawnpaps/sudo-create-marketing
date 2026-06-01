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
		title: "Audio Visual Post-production",
		description:
			"Finish the piece with intent.",
		detail:
			"Video editing, color grading, audio mixing, and mastering for media that needs to land. We work with music industry teams, recording studios, gaming companies, tabletop brands, and media companies that care about the final pass.",
		deliverables: ["Video Editing", "Color Grading", "Audio Mixing", "Mastering", "Delivery Prep"],
	},
	{
		number: "02",
		title: "Digital Media & Websites",
		description:
			"Build a digital presence around the content.",
		detail:
			"Content-driven websites and digital systems for creative businesses. We shape the structure, front end, CMS, performance, SEO, and video delivery so your work is easy to find, watch, and share.",
		deliverables: ["Websites", "Digital Presence", "CMS Integration", "Video Delivery", "Performance", "SEO"],
	},
	{
		number: "03",
		title: "Custom Software & Apps",
		description:
			"Build the tool your workflow needs.",
		detail:
			"Custom platforms and apps for creative workflows and media businesses. Tourpass is our flagship: a live event platform built by Sudo Create. We bring that same focus to fan tools, game companions, internal systems, and media operations.",
		deliverables: ["Web Apps", "Platforms", "APIs", "Integrations", "Custom Workflows", "Mux"],
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
						Media work, finished right.
					</motion.h1>
				</div>
				<motion.p
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
					className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl"
				>
					Sudo Create is a media studio in Tampa. We handle audio visual post-production, digital media & websites, and custom software for music, gaming, tabletop, media, and adjacent creative businesses.
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
				<p className="text-white/40 text-base">Tell us what needs to be finished, launched, or built.</p>
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
