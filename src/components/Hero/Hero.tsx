import profileImage from '../../assets/profile.png';
import { icons } from '../../constants';

const Hero = () => {
  return (
    <section className=" flex items-center justify-center pt-32 2xl:pt-[170px] 2xl:mt-56">

      <div className=" mx-auto text-center flex flex-col items-center">
        {/* Profile Image */}
        <div className="2xl:mb-3">
          <div className="w-[120px] h-[120px] rounded-xl overflow-hidden scale-[1.02]     hover:scale-[1.02] transition-transform duration-300">
            <img
              src={profileImage}
              alt="Yuki - Product Designer"
              className="xl:w-[102.56px] xl:h-[108px] 2xl:w-[116px] 2xl:h-[122.15px]  object-cover"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className=" 2xl:text-[56px] xl:text-[48px] font-medium leading-[1.2] text-[#262626] mb-2 tracking-tight">
          From Messy Ideas To Products People
          <br />
          Can <span className="font-instrument-serif italic font-normal">Actually Use.</span>
        </h1>


        <p className="2xl:text-[16px] text-[15px] font-[400] leading-relaxed text-[#262626] max-w-2xl mb-10">
          I help early-stage founders turn rough concepts into clear, usable digital products.
          <br className="hidden sm:block" />
          From structure and flows to polished UI, every decision is made with real users in mind.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 w-[165px] h-[56px] px-1  bg-[radial-gradient(ellipse_at_top,#4a4a4a,#1a1a1a)]
text-white rounded-full  transition-all duration-300 border-[1px] border-[#616161]"
          >
           <div className="text-[14px] font-bold tracking-wide flex items-center justify-center h-full text-center">
  Start a project
</div>

            <div className="flex items-center justify-center w-10 h-10 bg-[#FFFFFF33] shadow-md rounded-full group-hover:bg-[#5a5a5a] transition-colors duration-200">
              <img src={icons.arrowLeft} alt="arrow left" />

            </div>
          </a>


          <a
            href="#work"
            className="inline-flex items-center justify-center w-[139px] h-[56px]  text-[15px] font-medium bg-white text-[#262626] rounded-full transition-all duration-200"
          >
            View selected work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
