import MuxPlayer from "@mux/mux-player-react";

const VerticalVideoPlayer = ({ playbackId }: { playbackId: string }) => {
	return (
		<div className="rounded-3xl overflow-hidden h-full">
			<MuxPlayer
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					aspectRatio: "9 / 16",
				}}
				playbackId={playbackId}
				thumbnailTime={5}
			/>
		</div>
	);
};

export default VerticalVideoPlayer;
