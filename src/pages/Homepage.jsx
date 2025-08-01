import Footer from "../components/Footer";
import Header from "../components/Header";
import { Hero } from "../components/Hero";
import Newstaller from "../components/Newstaller";
import OurMission from "../components/OurMission";
import VideoSection from "../components/VideoSection";

export default function Homepage() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<VideoSection />
				<OurMission />
				<Newstaller />
			</main>
			<Footer />
		</>
	);
}
