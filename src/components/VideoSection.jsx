import { useState, useEffect, useRef } from "react";
import FadeInUp from "./animations/FadeInUp";

const VideoSection = () => {
	const [showVideo, setShowVideo] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const iframeRef = useRef(null);

	const handleGifClick = () => {
		setIsTransitioning(true);
		// Immediately hide the play button
		setTimeout(() => {
			setShowVideo(true);
			setIsTransitioning(false);
		}, 50); // Very short delay to ensure smooth transition
	};

	useEffect(() => {
		if (showVideo && iframeRef.current) {
			// Set a timeout to switch back to MP4 after video duration
			// Video is 1:17 (77 seconds) + 2 seconds buffer
			const timeout = setTimeout(() => {
				setShowVideo(false);
			}, 79000); // 79 seconds (77 + 2)

			return () => clearTimeout(timeout);
		}
	}, [showVideo]);

	return (
		<section
			className="video-section relative rounded-b-[90px] overflow-hidden group"
			id="video"
		>
			<FadeInUp>
				{showVideo ? (
					<iframe
						ref={iframeRef}
						src="https://player.vimeo.com/video/1106949587?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1"
						width="2560"
						height="1440"
						frameborder="0"
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						title="Knowledge Demo"
						className="w-full object-cover aspect-[2560/1440] h-auto"
					></iframe>
				) : (
					<div 
						onClick={handleGifClick}
						className="w-full object-cover aspect-[2560/1440] h-auto cursor-pointer relative"
					>
						<video
							src="/Knowledge _short looped animation_.mp4"
							className="w-full h-full object-cover"
							autoPlay
							loop
							muted
							playsInline
						/>
						{!isTransitioning && (
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300">
								<div className="bg-black bg-opacity-70 rounded-full p-3 hover:bg-opacity-80 transition-all duration-300">
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M8 5L15 10L8 15V5Z" fill="white" />
									</svg>
								</div>
							</div>
						)}
					</div>
				)}
			</FadeInUp>
		</section>
	);
};

export default VideoSection;
