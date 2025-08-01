import { motion } from "framer-motion";

const FadeInUp = ({ children }) => {
	const container = {
		hidden: { opacity: 0, y: 50 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			variants={container}
		>
			{children}
		</motion.div>
	);
};

export default FadeInUp;
