import FadeInUp from "./animations/FadeInUp";
import TextAnimation from "./animations/TextAnimation";

const OurMission = () => {
  // Calculate delays based on text length and animation speed
  const speed = 0.02;
  const firstParagraphText =
    "It started with a flawed assumption: that if you knew who someone was, you could act. You could sell to them, hire them, market to them, lend to them. The people data industry responded by building endless directories of static identities. Rows of names, titles, emails, and job histories were sold as insight. But they weren't.";
  const secondParagraphText =
    "Profile databases don't reveal what people want or need now—behavior does.";

  // Calculate delays for sequential loading
  const firstParagraphDelay = firstParagraphText.length * speed;
  const secondParagraphDelay = secondParagraphText.length * speed;

  return (
    <section className="relative" id="mission">
      <div className="mission-bg"></div>
      <div className="container relative z-10">
        <h3 className="text-base font-medium leading-[72px] text-[#818181] uppercase xl:translate-x-[-20px]">
          Our Mission
        </h3>
        <FadeInUp>
          <div className="mx-auto w-full max-w-[950px] font-semibold text-2xl md:text-[50px] md:leading-[55px]">
            <div>
              <TextAnimation text={firstParagraphText} speed={speed} />
            </div>
            <br />
            <div>
              <TextAnimation
                text={secondParagraphText}
                speed={speed}
                delay={firstParagraphDelay}
              />
            </div>
            <br />
            <div>
              <TextAnimation
                text="That's the mission. To give the world a new foundation for how they find, engage, and understand people, not based on who they are, but based on what they're likely to do next."
                speed={speed}
                delay={firstParagraphDelay + secondParagraphDelay}
              />
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default OurMission;
