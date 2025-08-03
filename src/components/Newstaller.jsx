import TextAnimation from "./animations/TextAnimation";
import Button from "./common/button";

const Newstaller = () => {
  const inputClass =
    "border-t border-[#D9D9D9] leading-[72px] text-xl font-semibold py-auto placeholder:text-white placeholder:font-semibold outline-none focus:border-t-[#D9D9D9] focus:outline-none w-full bg-transparent";
  return (
    <section
      className="rounded-b-[90px] mt-[90px] md:mt-[280px] pb-20 md:pb-[122px] pt-[45px] sm:pt-[110px] relative z-[10]"
      style={{
        background: `url(/newsletter-bg.png) #000 no-repeat bottom left`,
      }}
    >
      <img
        src="/oval.png"
        alt="newsletter"
        width={1602}
        height={1602}
        className="absolute top-[-55px] sm:top-[-105px] md:top-[-21%] left-0 w-full"
      />
      <div id="waitlist" className="mx-auto container relative z-10">
        <h3 className="text-5xl leading-[60px] md:text-[60px] md:leading-[1.4] lg:text-[90px] lg:leading-[110px] font-bold max-w-[524px] mx-auto text-center mb-16">
          <TextAnimation text="Know who they are. Predict what they'll do next." />
        </h3>
        <p className="text-center text-base font-medium mb-6">
          We're partnering with a small number of venture funds who align with
          our vision. If you'd like to be considered, share your info below.
        </p>
        <div className="flex flex-col gap-5 mx-auto max-w-[818px]">
          <div className="relative">
            <input className={inputClass} type="text" placeholder="Name" />
            <span className="absolute top-3 lg:text-lg end-0 text-[#818181] font-mono" style={{ fontFamily: 'Courier New, monospace' }}>
              0̷1
            </span>
          </div>
          <div className="relative">
            <input className={inputClass} type="text" placeholder="Company" />
            <span className="absolute top-3 lg:text-lg end-0 text-[#818181] font-mono" style={{ fontFamily: 'Courier New, monospace' }}>
              0̷2
            </span>
          </div>
          <div className="relative">
            <input className={inputClass} type="email" placeholder="Email" />
            <span className="absolute top-3 lg:text-lg end-0 text-[#818181] font-mono" style={{ fontFamily: 'Courier New, monospace' }}>
              0̷3
            </span>
          </div>

          <div className="flex flex-wrap justify-end gap-6">
            <Button text="REQUEST EARLY ACCESS" className="max-sm:flex-grow" />
            <Button text="REQUEST A INTRO" className="max-sm:flex-grow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newstaller;
