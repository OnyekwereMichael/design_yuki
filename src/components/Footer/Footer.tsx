import React from 'react';
import profileImage from '../../assets/profile.jpg';
import { icons } from '../../constants';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "X (Formerly Twitter)", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "LinkedIn", href: "#" }
  ];

  const features = [
    "We talk through your idea or product",
    "I'll ask a few questions and share honest feedback",
    "We'll decide next steps if it makes sense"
  ];

  return (
    <footer className="bg-white pt-28 pb-12 px-4 md:px-0 ">
      <div className="section-container bg-[#F8F8F8] p-[24px] rounded-[40px] 2xl:max-w-[1428px] xl:max-w-[1240px] h-[543px]">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32 items-start mb-8">
          
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-b from-[#575757] to-[#262626] rounded-full p-[10px] pr-4 mb-5 shadow-lg ">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                <img src={profileImage} alt="Yuki" className="w-full h-full object-cover grayscale" />
              </div>
              <span className="text-white 2xl:text-[15px] xl:text-[14px] tracking-[0.02em] font-medium ">ShipWithYuki</span>
            </div>

            <h2 className="text-[#262626] 2xl:text-[40px] xl:text-[40px] text-[40px] font-medium leading-[1.25] tracking-[0.01em] mb-1.5 pt-1 ">
              A Quick Conversation To See If<br className="hidden xl:block" />  We're  The Right Fit
            </h2>
            <p className="text-[#3A3A3A] leading-[1.5] tracking-[0.02em] 2xl:text-[16px] xl:text-[16px] text-[15px] font-normal max-w-lg mb-6">
              A quick 15 or 30-minutes intro call to understand your product, align on expectations, and decide next steps.
            </p>

            <div className="flex flex-col 2xl:gap-7 xl:gap-8">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="text-[#262626] leading-[100%] tracking-[0.01em]  2xl:text-[14px] xl:text-[14px] font-medium hover:opacity-70 transition-opacity"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: CTA Card */}
          <div className="2xl:w-[391px] xl:w-[391px] xl:h-[355px] 2xl:h-[345px] w-full bg-[#262626] 2xl:rounded-[25px] rounded-[25px] 2xl:p-[16px] xl:p-[16px] lg:p-[12px] flex flex-col gap-6 ">
            <h3 className="text-white 2xl:text-[24px] xl:text-[24px] font-medium tracking-[-0.01em]">
              Let's Talk About Your Product
            </h3>

            <ul className="flex flex-col 2xl:gap-5 xl:gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#46DC74] border-[1.25px] border-[#46DC74] flex items-center justify-center shrink-0 mt-0.5">
                    <img src={icons.checkIcon} alt="" />
                  </div>
                  <span className="text-white 2xl:text-[15px] xl:text-[15px] font-normal leading-[160%] tracking-[0.02em]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 ">
              <button className="w-full h-[56px] rounded-[15px] bg-[#373737]  text-white font-medium 2xl:text-[15px] xl:text-[15px] flex items-center justify-center gap-3 transition-colors border-t-2 border-white/5 active:scale-[0.98] ">
               <img src={icons.appointment} alt="" />
               <p className='tracking-[0.02em] leading-[150%]'>15-Mins Meeting</p>
              </button>
              <button className="w-full h-[56px] rounded-[15px] bg-[#373737]  text-white font-medium 2xl:text-[15px] xl:text-[15px] flex items-center justify-center gap-3 transition-colors border-t-2 border-white/5  active:scale-[0.98] ">
               <img src={icons.appointment} alt="" />
               <p className='tracking-[0.02em] leading-[150%]'>30-Mins Meeting</p>
              </button>
            </div>
          </div>
        </div>

        {/* Legal/Copyright Bar */}
        <div className="pt-5 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <p className="text-[#B8B8B8] 2xl:text-[14px] text-[14px] font-medium tracking-[0.01em]">
              © 2025 Ship With Yuki. All Rights Reserved.
            </p>
            <p className="text-[#B8B8B8] 2xl:text-[13px] xl:text-[12px] font-normal  tracking-[0.01em] leading-[150%]">
              Product design for startups and early-stage teams. MVP design - UX/UI - Design systems
            </p>
          </div>
          <a href="mailto:shipwithyuki@gmail.com" className="text-[#B8B8B8] 2xl:text-[13px] xl:text-[13px] tracking-[-0.01em] leading-[100%] font-medium hover:opacity-70 transition-opacity">
            shipwithyuki@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
