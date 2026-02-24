import React from 'react';
import { icons } from '../../constants';

const Services: React.FC = () => {
  const services = [
    {
      title: "Product Design",
      description: "Web and mobile products designed for clarity, usability, and real-world use.",
      icon: <img src={icons.webDesign} alt=""  />
    },
    {
      title: "MVP & Early-Stage Design",
      description: "Helping founders shape and design focused products without building too much, too soon.",
      icon: <img src={icons.rocket01} alt=""  />
    },
    {
      title: "Design Systems",
      description: "Consistent components and patterns that make products easier to scale and maintain.",
      icon: <img src={icons.artboardTool} alt="" />
    },
    {
      title: "Brand Identity & Design",
      description: "Consistent components and patterns that make products easier to scale and maintain.",
      icon: <img src={icons.canvas} alt="" />
    }
  ];

  return (
    <section className='bg-white pt-20 px-4 md:px-0'>
      <div className="section-container">
        <h2 className="text-center xl:text-[32px] md:text-[40px] font-medium text-[#262626] mb-5 tracking-tight">
          Our Services
        </h2>
        
        <section className="bg-[#F8F8F8] mx-auto mb-20 p-4 rounded-[45px]">
          <div className="">
      
        <div className="flex justify-between gap-6">
          {services.map((service, index) =>  (
            <div 
              key={index} 
              className="bg-[#FFFFFF] 2xl:rounded-[25px] xl:rounded-[20px] 2xl:p-[20px] xl:p-[14px] flex flex-col gap-12   transition-all duration-300 "
            >
              <div className="text-[#262626] w-8 h-8 flex items-center justify-center">
                {service.icon}
              </div>
              
              <div className="mt-auto space-y-1.5">
                <h3 className="text-[15px] 2xl:text-[16px] font-medium text-[#262626] leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#262626] text-[14px] 2xl:text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
    </section>
  );
};

export default Services;
