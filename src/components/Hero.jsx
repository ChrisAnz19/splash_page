import FadeInUp from "./animations/FadeInUp";
import TextAnimation from "./animations/TextAnimation";
import Button from "./common/button";

export const Hero = () => {
	return (
		<section className="py-[52px]">
			<div className="container">
				<FadeInUp>
					<h1 className="text-white text-4xl sm:text-5xl md:text-[70px] md:leading-[72px] font-bold xl:pl-[52px] mb-4">
						<TextAnimation text="Know why they’ll respond." />
						<div className="text-[#818181]">
							<TextAnimation text="Before they do." />
						</div>
					</h1>
					<p className="text-[#818181] text-base sm:text-xl md:text-2xl mb-8">
						Billions were spent mapping who’s who. But business runs
						on who’s next.
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
