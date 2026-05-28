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
			"Built for brands where the content IS the brand.",
		detail:
			"Not templated. Websites designed from the ground up around the media, content, and creative vision that make a brand what it is. Built for music labels, photographers, founders, and creators — where a generic template isn't an option.",
		deliverables: ["Astro", "React", "CMS Integration", "Video Delivery", "Performance", "SEO"],
	},
	{
		number: "02",
		title: "Custom Software & Apps",
		description:
			"Built for how you actually work — not how someone else does.",
		detail:
			"Web apps and platforms designed around your specific workflow and creative model. Tourpass, our music industry networking platform, is proof: when off-the-shelf doesn't fit, we build something that does. From audience-facing products to internal tools, we cover the full build.",
		deliverables: ["React", "Next.js", "APIs", "Custom Workflows", "Third-party Integrations", "Auth & Payments"],
	},
	{
		number: "03",
		title: "Media Infrastructure & CMS",
		description:
			"The systems that keep your content moving.",
		detail:
			"Mux video integration, streaming infrastructure, content management systems, and the backend that powers it all. Built for brands where the delivery system matters as much as what's being delivered — so content reaches your audience exactly the way you intended.",
		deliverables: ["Mux", "Payload CMS", "Live Streaming", "APIs", "Video Delivery", "Custom Workflows"],
	},
	{
		number: "04",
		title: "Content Creation",
		description:
			"Visual media shot for the products we build.",
		detail:
			"Photography and video created specifically to power our tech solutions — websites, apps, and platforms. When we build your site, we can shoot the content that goes in it. No stock. No mismatch. The visuals and the technology are designed as one.",
		deliverables: ["Photography", "Videography", "Brand", "Music Industry", "On-location", "Studio"],
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
						The full stack.
					</motion.h1>
				</div>
				<motion.p
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
					className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl"
				>
					Most agencies stop at one layer. Sudo Create covers the whole thing — custom websites, software, and the media infrastructure behind them. Built specifically for music brands, photographers, founders, and creators. Some clients start from scratch. Some have a brand but no site. Some have a site but need the tech behind it. We meet you where you are.
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
