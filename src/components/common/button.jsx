import { cn } from "../../utils/cn";

const Button = ({ text, className }) => {
	return (
		<button
			className={cn(
				"rounded-full px-5 h-12 bg-background2 uppercase text-base font-semibold text-black cursor-pointer hover:bg-primary hover:text-white duration-300 transition-all",
				className
			)}
			type="button"
		>
			{text}
		</button>
	);
};

export default Button;
