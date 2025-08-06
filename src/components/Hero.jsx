import FadeInUp from "./animations/FadeInUp";
import TextAnimation from "./animations/TextAnimation";
import CyclingText from "./animations/CyclingText";
import Button from "./common/button";

export const Hero = () => {
	return (
		<section className="py-[52px]">
			<div className="container">
				<FadeInUp>
					<h1 className="text-white text-4xl sm:text-5xl md:text-[70px] md:leading-[72px] font-bold mb-6 ml-2 tracking-tight">
						<div className="mb-2">
							Know why <CyclingText 
								words={["prospects", "investors", "candidates", "anyone"]} 
								className="text-[#f84b76]" 
								cycleSpeed={2500}
							/> will respond.
						</div>
						<div className="text-[#818181]">
							<TextAnimation text="Before they do." />
						</div>
					</h1>
					<p className="text-[#818181] text-base sm:text-xl md:text-2xl mb-6">
						Billions were spent mapping who's who. But business runs
						on who's next.
					</p>
					<p className="text-[#f84b76] text-base sm:text-xl md:text-2xl mb-10 max-w-4xl">
						Knowledge is a native AI company mapping 370 million professionals across trillions of behavioral signals, trained on millions of hours of human decision-making data to predict real-world actions before they happen.
					</p>
					<div>
						<a href="#mission" className="inline-block">
							<Button text="READ OUR MISSION" />
						</a>
					</div>
				</FadeInUp>
			</div>
		</section>
	);
};
