import { cn } from "../../utils/cn";

const Button = ({ text, className, onClick, disabled }) => {
	const handleClick = (e) => {
		console.log('Button clicked:', text);
		if (onClick && !disabled) {
			onClick(e);
		}
	};

	console.log('Button rendering with text:', text);

	return (
		<button
			className={cn(
				"rounded-full px-4 h-10 bg-background2 uppercase text-sm font-semibold text-black cursor-pointer hover:bg-primary hover:text-white duration-300 transition-all",
				disabled && "opacity-50 cursor-not-allowed",
				className
			)}
			type="button"
			onClick={handleClick}
			disabled={disabled}
		>
			{text || 'Button'}
		</button>
	);
};

export default Button;
