import profileImage from '../../assets/profile.png';
import { icons } from '../../constants';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-8 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Profile Image */}
        <div className="mb-3">
          <div className="w-[120px] h-[120px] rounded-xl overflow-hidden    hover:scale-[1.02] transition-transform duration-300">
            <img 
              src={profileImage} 
              alt="Yuki - Product Designer" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className=" text-[48px] font-medium leading-[1.2] text-[#262626] mb-2 tracking-tight">
          From Messy Ideas To Products People
          <br />
          Can <span className="font-instrument-serif italic font-normal">Actually Use.</span>
        </h1>

      
        <p className="text-[15px] font-medium leading-relaxed text-[#262626] max-w-2xl mb-10">
          I help early-stage founders turn rough concepts into clear, usable digital products.
          <br className="hidden sm:block" />
          From structure and flows to polished UI, every decision is made with real users in mind.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-3 pl-4 pr-4 py-2 bg-[radial-gradient(ellipse_at_top,#4a4a4a,#1a1a1a)]
text-white rounded-full hover:from-[#4a4a4a] hover:to-[#2a2a2a] hover:-translate-y-0.5 transition-all duration-300 shadow-xl shadow-[#14141480] h-[56px] shadow-inner drop-shadow-xl drop-shadow-[#22222240]"
          >
            <span className="text-[14px] font-bold tracking-wide">Start a project</span>
            <span className="flex items-center justify-center w-10 h-10 bg-[#FFFFFF33] shadow-md rounded-full group-hover:bg-[#5a5a5a] transition-colors duration-200">
              <img src={icons.arrowLeft} alt="arrow left" />
            
            </span>
          </a>
          
       
          <a 
            href="#work" 
            className="inline-flex items-center justify-center px-6 h-14 text-[15px] font-semibold bg-white text-[#262626] rounded-full hover:border hover:border-[#262626] transition-all duration-200"
          >
            View selected work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
