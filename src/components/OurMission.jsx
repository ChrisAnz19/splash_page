import { useState, useEffect } from "react";
import FadeInUp from "./animations/FadeInUp";

const OurMission = () => {
  const [showFirstParagraph, setShowFirstParagraph] = useState(false);
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);
  const [showThirdParagraph, setShowThirdParagraph] = useState(false);

  useEffect(() => {
    // Fade in first paragraph after a short delay
    const timer1 = setTimeout(() => setShowFirstParagraph(true), 500);
    
    // Fade in second paragraph after first one
    const timer2 = setTimeout(() => setShowSecondParagraph(true), 1500);
    
    // Fade in third paragraph after second one
    const timer3 = setTimeout(() => setShowThirdParagraph(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative pb-20 md:pb-32" id="mission">
      <div className="mission-bg"></div>
      <div className="container relative z-10">
        <h3 className="text-base font-medium leading-[72px] text-[#818181] uppercase xl:translate-x-[-20px] mt-8 md:mt-12">
          Our Mission
        </h3>
        <FadeInUp>
          <div className="mx-auto w-full max-w-[950px] font-semibold text-2xl md:text-[50px] md:leading-[55px]">
            <div 
              className={`transition-opacity duration-1000 ease-in-out ${
                showFirstParagraph ? 'opacity-100' : 'opacity-0'
              }`}
            >
              It started with a flawed assumption: that if you knew who someone was, you could act. You could sell to them, hire them, market to them, lend to them. The people data industry responded by building endless directories of static identities. Rows of names, titles, emails, and job histories were sold as insight. But they weren't.
            </div>
            <br />
            <div 
              className={`transition-opacity duration-1000 ease-in-out ${
                showSecondParagraph ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Profile databases don't reveal what people want or need now—behavior does.
            </div>
            <br />
            <div 
              className={`transition-opacity duration-1000 ease-in-out ${
                showThirdParagraph ? 'opacity-100' : 'opacity-0'
              }`}
            >
              That's the mission. To give the world a new foundation for how they find, engage, and understand people, not based on who they are, but based on what they're likely to do next.
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default OurMission;
