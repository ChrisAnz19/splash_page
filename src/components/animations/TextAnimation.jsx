import { motion } from "framer-motion";

const TextAnimation = ({ text, speed = 0.04, delay = 0 }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true }}
      className="inline"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={item}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextAnimation;
