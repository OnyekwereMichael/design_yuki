import React from 'react';
import { icons, images } from '../../constants';

const testimonials = [
  {
    image: images.testimonialPicOne,
    handle: "@Lovable_Mvp",
    avatar: images.testimonialPicOne, // Using same image as placeholder for avatar
  },
  {
    image: images.testimonialPicTwo,
    handle: "@Ezthedeveloper",
    avatar: images.testimonialPicTwo,
  },
  {
    image: images.testimonialPicThree,
    handle: "@thatboyfred",
    avatar: images.testimonialPicThree,
  },
  {
    image: images.testimonialPicFour,
    handle: "@johnathan",
    avatar: images.testimonialPicFour,
  },
];

const PlayIcon = () => (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.5L10.5 7L1 12.5V1.5Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section className="pt-3 px-4 md:px-0 bg-white">
      <div className="section-container">
        <div className="text-center 2xl:mb-8 xl:mb-6">
        <h2 className="xl:text-[32px] 2xl:text-[40px] font-medium text-[#262626] mb-2 tracking-tight leading-[1.1]">
          Don't Take My Word For It
        </h2>
        <p className="xl:text-[16px] 2xl:text-[18px] text-[#262626] font-normal max-w-2xl mx-auto">
          Here's what people I've worked with say about the experience and the outcome.
        </p>
      </div>

      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative xl:h-[347px] 2xl:h-[403px]  2xl:rounded-[38px] xl:rounded-[32px] overflow-hidden group cursor-pointer"
            >
              <img 
                src={testimonial.image} 
                alt={`Testimonial from ${testimonial.handle}`}
                className=""
              />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform ">
                  <div className="ml-1">
                    <img src={icons.playIcon} alt="play" />
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-2 items-center">
                {/* User Info */}
                <div className="flex items-center gap-2 bg-white rounded-full py-2 px-3 pr-4 shadow-sm">
                  <div className="2xl:w-[32px] 2xl:h-[32px] xl:w-[28px] xl:h-[28px] w-[24px] h-[24px] rounded-full overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="xl:text-[13px] 2xl:text-[15px] font-medium text-[#262626]">
                    {testimonial.handle}
                  </span>
                </div>

                {/* X Icon Button */}
                <div className="2xl:w-[48px] 2xl:h-[48px] xl:w-[40px] xl:h-[40px] rounded-full bg-gradient-to-b from-[#575757] to-[#262626]  border-white/10 flex items-center justify-center text-white">
                 <img src={icons.twitterIcon} alt="twitter" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
