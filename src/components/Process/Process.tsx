
import { icons, images } from '../../constants';

const Process = () => {
  return (
    <section className="px-6 lg:px-20 bg-white py-24 mx-auto flex flex-col gap-32">
      
      {/* Header Badge */}
      <div className="flex justify-center items-center mb-[-109px]">
        <div className="bg-gradient-to-b from-[#575757] to-[#262626] text-white 2xl:w-[252px] 2xl:h-[48px] xl:w-[246px] xl:h-[48px] rounded-[25px] flex items-center justify-center gap-1.5 p-[10px] text-sm font-medium ">
            <div>
               <img src={icons.workCase} alt=""  />
           </div>
          <p className='2xl:text-[15px] xl:text-[14px] 2xl:mt-[4px] xl:mt-[2px] font-medium leading-[100%]'>How We Design & Ship Products</p>
        </div>
      </div>

      
      <section>
     <div className="flex flex-col items-center">
        <h2 className="2xl:text-[40px] xl:text-[32px] md:text-[48px] font-medium text-[#262626] text-center mb-12">
          From Idea To <span className="italic  font-serif font-normal">Usable Product</span>
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-[#E5E5E5] w-full">
          <div className="flex flex-col gap-2 md:pr-12 md:pb-0 pb-12">
            <div className="xl:w-[104px] xl:h-[104px] 2xl:w-[116px] 2xl:h-[116px]  bg-gradient-to-b from-[#575757] to-[#262626] rounded-full flex items-center justify-center mb-2">
              <img src={icons.phone} alt="Understand"  />
            </div>
            <h3 className="2xl:text-[32px] leading-[150%] xl:text-[24px] font-normal text-[#262626]">Understand</h3>
            <p className="2xl:text-[16px] xl:text-[15px] leading-[150%] text-[#262626] font-normal ">
              We start by understanding your idea, your users, and what actually matters for version one. No bloated features, just clarity.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:px-12 md:py-0 py-12 border-t md:border-t-0 border-[#E5E5E5]">
            <div className="xl:w-[104px] xl:h-[104px] 2xl:w-[116px] 2xl:h-[116px]  bg-gradient-to-b from-[#575757] to-[#262626] rounded-full flex items-center justify-center mb-2">
              <img src={icons.cursor} alt="Design" />
            </div>
            <h3 className="2xl:text-[32px] leading-[150%] xl:text-[24px] font-normal text-[#262626]">Design</h3>
            <p className="2xl:text-[16px] xl:text-[15px] leading-[150%] text-[#262626] font-normal">
              We design key flows and screens with usability in mind, iterating quickly and focusing on what actually matters for version one.
            </p>
          </div>

          {/* Ship */}
          <div className="flex flex-col gap-2 md:pl-12 border-t md:border-t-0 border-[#E5E5E5]">
            <div className="xl:w-[104px] xl:h-[104px] 2xl:w-[116px] 2xl:h-[116px]  bg-gradient-to-b from-[#575757] to-[#262626] rounded-full flex items-center justify-center mb-2">
              <img src={icons.rocket} alt="Ship" />
            </div>
            <h3 className="2xl:text-[32px] leading-[150%] xl:text-[24px] font-normal text-[#262626]">Ship</h3>
            <p className="2xl:text-[16px] xl:text-[15px] leading-[150%] text-[#262626] font-normal">
              We prepare designs for handoff or build, support iteration, and help you move forward with clarity and confidence.
            </p>
          </div>
        </div>
        
      </div>



         {/* The Thinking Behind The Work Section */}
      <div className="flex justify-between mt-16">
        <div className="flex flex-col gap-10">
          <h2 className="2xl:text-[32px] xl:text-[30px] md:text-[48px] font-medium text-[#262626]">
            The Thinking <span className="italic font-normal font-serif">Behind The Work</span>
          </h2>
          
          <ul className="flex flex-col gap-6">
            {[
              "We start with the problem, not the interface",
              "Clarity is a design decision",
              "Every screen should earn its place",
              "Systems matter more than one-off visuals",
              "Design should feel obvious in hindsight"
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-4 2xl:text-[24px] 2xl:leading-[160%] xl:text-[18px] xl:leading-[160%] font-normal text-[#262626]">
                <div className="w-1.5 h-1.5 bg-[#262626] rounded-sm shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Illustration */}
        <div className="">
          <img 
            src={images.underControl} 
            alt="Everything is under control" 
            className="2xl:w-[412px] 2xl:h-[412px] xl:w-[374px] xl:h-[432px] object-contain"
          />
        </div>
      </div>
      </section>
     

     
    </section>
  );
};

export default Process;
