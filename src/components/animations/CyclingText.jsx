import { useState, useEffect } from "react";

const CyclingText = ({ words, className = "", cycleSpeed = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => 
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 300); // Half of the transition duration for smooth effect
    }, cycleSpeed);

    return () => clearInterval(interval);
  }, [words.length, cycleSpeed]);

  return (
    <span 
      className={`inline transition-all duration-500 ease-in-out ${
        isAnimating 
          ? 'opacity-0 transform -translate-y-2' 
          : 'opacity-100 transform translate-y-0'
      } ${className}`}
      style={{ 
        display: 'inline',
        minWidth: '8ch',
        textAlign: 'left'
      }}
    >
      {words[currentWordIndex]}
    </span>
  );
};

export default CyclingText;