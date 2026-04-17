import React, { useState } from 'react';
import { icons } from '../../constants';
import profileImage from '../../assets/profile.jpg';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "What Kind Of Clients Do You Work With?",
      answer: "Mostly early-stage founders, startups, and small teams building digital products. If you're serious about shipping and improving a real product, we'll probably work well together."
    },
    {
      question: "What If I'm Not Sure Which Plan I Need?",
      answer: "No worries! We can discuss your project during the intro call and I'll recommend the best path forward based on your goals and timeline."
    },
    {
      question: "How Do Revisions Work?",
      answer: "I work iteratively. Depending on the plan, we have dedicated feedback loops to ensure the design aligns with your vision and user needs."
    },
    {
      question: "Will My Designs Be Developer-Ready?",
      answer: "Absolutely. I provide clean Figma files with proper naming, auto-layout, and a basic design system to make handoff seamless for your team."
    },
    {
      question: "Do You Work With Existing Products Or Only New MVPs?",
      answer: "Both! Whether you're starting from scratch or looking to improve an existing product, I can help you find clarity and better usability."
    },
    {
      question: "How Does Payment Work?",
      answer: "Payments are typically handled via invoice. Depending on the scope, it could be one-time, milestone-based, or a monthly retainer."
    },
    {
      question: "How Do We Get Started?",
      answer: "The first step is a quick intro call to see if we're a good fit. If everything looks good, we'll define the scope and get moving."
    }
  ];

  return (
    <section className="bg-white pt-28 px-4 md:px-0">
      <div className="section-container 2xl:w-[1428px] xl:w-[1200px] ">
        <h2 className="2xl:text-[40px] xl:text-[32px] md:text-[32px] font-medium text-[#2E2E2E] mb-8 tracking-tight leading-tight">
          <span className="italic font-serif font-normal tracking-[-0.05em]">Frequently</span> <span className='tracking-[0.01em]'>Asked Questions</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-5 items-start">
          <div className="flex-1 bg-[#262626] rounded-[30px] 2xl:p-[24px] xl:p-[20px] flex flex-col gap-4 w-full">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className={`rounded-[20px] overflow-hidden transition-all duration-300 shadow-xl ${openIndex === index ? 'bg-[#373737]' : 'bg-[#373737] hover:bg-[#373737]'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left 2xl:p-4 xl:p-[10px] flex justify-between items-center gap-4  group"
                >
                  <span className="text-white 2xl:text-[18px] xl:text-[17px] font-medium tracking-[0.02em] leading-[1.0]">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#575757] flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                    {openIndex === index ? (
                      <svg width="12" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="12" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </button>
                <div 
                  className={`2xl:px-4 xl:px-3 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 2xl:pb-6 xl:pb-3 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-[#FFFFFF] font-normal 2xl:text-[16px] xl:text-[16px] leading-[1.5] tracking-[0.02em]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call Card Column */}
          <div className="2xl:w-[384px] xl:w-[346px] bg-[#262626] 2xl:rounded-[30px] xl:rounded-[28px]  2xl:p-7 xl:p-[24px] flex flex-col gap-3.5">
            <div className="w-[80px] h-[80px] rounded-full p-[2px] border border-[#FFFFFF] bg-[#FFFFFF] flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Yuki - Product Designer"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            <h3 className="text-white 2xl:text-[32px] xl:text-[24px] font-medium leading-tight tracking-[0.01em]">
              Book A 15-Min Intro <br /> Call
            </h3>

            <button className="w-full 2xl:h-[56px] xl:h-[50px] 2xl:rounded-[24px] xl:rounded-[20px] bg-[radial-gradient(ellipse_at_top,#575757,#373737)]  text-white/90 font-medium 2xl:text-[16px] xl:text-[16px] transition-colors -inner tracking-[0.02em]">
              Book A Call
            </button>

            <div className="flex items-center justify-between ">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                  <img src={icons.forward} alt="arrow left" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-white 2xl:text-[16px] xl:text-[15px] font-medium  tracking-[0.02em]">Prefer To Email?</span>
                    <span className="text-white 2xl:text-[16px] xl:text-[15px] font-normal tracking-[0.02em]   ">shipwithyuki@gmail.com</span>
                 </div>
               </div>
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-white/90 transition-colors">
             <img src={icons.arrowRight02} alt="arrow left" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
