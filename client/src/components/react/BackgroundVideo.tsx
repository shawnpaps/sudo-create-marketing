import MuxPlayer from "@mux/mux-player-react";

const BackgroundVideo = ({ playbackId }: { playbackId: string }) => (
	<div className="fixed top-0 left-0 w-full h-full -z-10">
		<MuxPlayer
			playbackId={playbackId}
			autoPlay="muted"
			loop
			muted
			playsInline
			thumbnailTime={0}
			style={
				{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					"--media-object-fit": "cover",
					"--media-object-position": "center",
					display: "block",
				} as React.CSSProperties
			}
		/>
		<div className="absolute inset-0 bg-black/50" />
	</div>
);

export default BackgroundVideo;
