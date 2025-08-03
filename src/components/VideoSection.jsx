import { useRef, useState } from "react";
import FadeInUp from "./animations/FadeInUp";

const VideoSection = () => {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [hover, setHover] = useState(false);

	const handleTogglePlay = () => {
		const video = videoRef.current;
		if (!video) return;

		if (video.paused) {
			video.play();
			setIsPlaying(true);
		} else {
			video.pause();
			setIsPlaying(false);
		}
	};

	return (
		<section
			className="video-section relative rounded-b-[90px] overflow-hidden group"
			id="video"
		>
			<FadeInUp>
				{/* <video
					ref={videoRef}
					src="/sample.mp4"
					className="w-full h-[500px] lg:h-[790px] object-cover"
					loop={true}
					autoPlay={true}
					// controls={hover}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				></video> */}
				{/* <iframe
					src="https://www.youtube.com/embed/GfnMwClqqeg?modestbranding=1"
					title="Knowledge Teaser"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
					modestbranding="1"
					className="w-full h-[500px] lg:h-[890px] object-cover"
				></iframe> */}
				<iframe
					src="https://player.vimeo.com/video/1106878484?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
					width="2560"
					height="1440"
					frameborder="0"
					allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					title="Knowledge Demo"
					className="w-full object-cover aspect-[2560/1440] h-auto"
				></iframe>
			</FadeInUp>
			{/* <button
				onClick={handleTogglePlay}
				className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full overflow-hidden cursor-pointer opacity-0 group-hover:opacity-100 duration-300 transition-all"
				style={{
					opacity: !isPlaying ? 1 : "",
				}}
			>
				{isPlaying ? pauseicon : playicon}
			</button> */}
		</section>
	);
};
const playicon = (
	<svg
		width="70"
		height="70"
		viewBox="0 0 70 70"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="35" cy="35" r="35" fill="#D9D9D9" />
		<path d="M56 35L24.5 53.1865L24.5 16.8135L56 35Z" fill="black" />
	</svg>
);
const pauseicon = (
	<svg
		width="70"
		height="70"
		viewBox="0 0 70 70"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="70" height="70" fill="#D9D9D9" />
		<path d="M24.5 24.5H45.5V45.5H24.5V24.5Z" fill="black" />
	</svg>
);
export default VideoSection;
