import { Link } from "react-router-dom";
import FadeInUp from "./animations/FadeInUp";
import Urls from "./common/urls";

const navigationLinks = [
	{
		title: "video",
		url: "#video",
	},
	{
		title: "our mission",
		url: "#mission",
	},
	{
		title: "investor intro",
		url: "#waitlist",
	},
	{
		title: "waitlist",
		url: "#waitlist",
	},
];

const legalLinks = [
	{
		title: "privacy policy",
		url: "#privacy",
	},
	{
		title: "terms of service",
		url: "#terms",
	},
	{
		title: "don't sell my info",
		url: "#dontsellmyinfo",
	},
	{
		title: "TEAM LOGIN",
		url: "https://new-logo-front-end.onrender.com",
	},
];

const Footer = () => {
	return (
		<footer className="footer mt-[-90px] overflow-hidden">
			<div className="mx-auto container relative pt-[50px]">
				<div className="pt-20 flex flex-col gap-5 sm:flex-row justify-between mx-[45px]">
					<Link to="/">
						<img
							src="/footerlogo.png"
							alt="logo"
							width={191}
							height={69}
						/>
					</Link>

					<div className="flex gap-[92px]">
						<Urls title="Navigation" links={navigationLinks} />
						<Urls title="Legal" links={legalLinks} />
					</div>
				</div>
				<FadeInUp>
					<div className="px-6 xl:px-[45px] relative">
						<img
							className="max-w-full translate-y-1/2"
							src="/knowledge.png"
							width={1349}
							height={274}
							alt="knowledge"
						/>
					</div>
				</FadeInUp>
			</div>
		</footer>
	);
};

export default Footer;
