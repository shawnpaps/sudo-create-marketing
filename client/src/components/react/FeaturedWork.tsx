import VerticalVideoPlayer from "./VerticalVideoPlayer";

export type FeaturedWorkProps = {
	label: string;
	title: string;
	description: string;
	href: string;
	playbackId: string;
	hasCaseStudy?: boolean;
};

const FeaturedWork = ({
	label,
	title,
	description,
	href,
	playbackId,
	hasCaseStudy,
}: FeaturedWorkProps) => {
	return (
		<div className="flex flex-row items-center w-full gap-20 relative p-10">
			<div className="absolute top-0 left-0 w-full h-full -z-10 blur-sm rounded-3xl overflow-hidden">
				<img
					className="object-cover w-full h-full"
					src={"/tourpass.png"}
					alt=""
				/>
			</div>
			<div className="flex-1 flex flex-col gap-6">
				<span className="text-sm uppercase tracking-widest text-white/40">
					{label}
				</span>
				<h2 className="text-5xl font-bold leading-tight">{title}</h2>
				<p className="text-white/60 text-lg max-w-md leading-relaxed">
					{description}
				</p>
				<a
					href={href}
					className="group self-start inline-flex items-center gap-2 text-sm font-medium border border-white/20 px-5 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
				>
					{hasCaseStudy ? (
						<>
							<span className="group-hover:hidden">View Project →</span>
							<span className="hidden group-hover:inline">View Case Study →</span>
						</>
					) : (
						"View Project →"
					)}
				</a>
			</div>

			<div className="relative flex-shrink-0">
				<div className="absolute inset-0 bg-white/10 blur-3xl rounded-full -z-10" />
				<div className="h-[780px] aspect-[9/16]">
					<VerticalVideoPlayer playbackId={playbackId} />
				</div>
			</div>
		</div>
	);
};

export default FeaturedWork;
