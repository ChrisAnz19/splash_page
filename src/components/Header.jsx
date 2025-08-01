import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import Button from "./common/button";

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<header className="py-10">
			<div className="container relative">
				<div className="flex justify-between items-center">
					<Link
						to="/"
						className="flex w-[180px] md:w-[234px] xl:translate-y-4"
					>
						<img
							src="/logo.png"
							alt="logo"
							width={468}
							height={138}
							className="max-w-full h-auto"
						/>
					</Link>
					<div
						className={cn(
							"text-[#818181] uppercase gap-8 flex max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:bg-black max-lg:border-r max-lg:border-white/10 max-lg:w-full max-lg:max-w-[320px] max-lg:h-screen max-lg:z-[100] max-lg:p-10 max-lg:flex-col max-lg:items-center max-lg:text-2xl max-lg:pt-20 duration-300 transition-all",
							{
								"max-lg:opacity-0 max-lg:invisible max-lg:translate-x-[-100%]":
									!open,
							}
						)}
					>
						<a onClick={() => setOpen(false)} href="#video">
							Video
						</a>
						<a onClick={() => setOpen(false)} href="#mission">
							Our Mission
						</a>
						<a onClick={() => setOpen(false)} href="#waitlist">
							Waitlist
						</a>
						<a
							onClick={() => setOpen(false)}
							href="#waitlist"
							className="block lg:hidden mt-auto"
						>
							<Button text="GET EARLY ACCESS" />
						</a>
						<button
							type="button"
							className="lg:hidden absolute top-5 right-5 text-white"
							onClick={() => setOpen(false)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6"
							>
								<path
									fillRule="evenodd"
									d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
					<a
						onClick={() => setOpen(false)}
						href="#waitlist"
						className="lg:block hidden"
					>
						<Button text="GET EARLY ACCESS" />
					</a>
					<button
						className="lg:hidden cursor-pointer"
						type="button"
						onClick={() => setOpen(!open)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-10"
						>
							<path
								fillRule="evenodd"
								d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
