import { useState, useEffect } from "react";
import Button from "./common/button";

const StickyButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    document.getElementById('waitlist')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className={`fixed top-4 right-10 z-50 transition-opacity duration-300 ${
      isScrolled ? 'opacity-100' : 'opacity-0'
    }`}>
      <Button
        text="GET EARLY ACCESS"
        onClick={handleClick}
      />
    </div>
  );
};

export default StickyButton;