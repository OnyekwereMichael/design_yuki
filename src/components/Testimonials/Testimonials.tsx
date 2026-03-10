import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { icons, images } from '../../constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const testimonialsData = [
  {
    name: "Lovable MVP Agency",
    role: "MVP Team",
    avatar: images.testimoial_Img,
    text: "ShipwithYuki delivered our project in just seven days **fast, precise, and detail-oriented.** The quality remained strong despite the speed. We'd gladly collaborate again and confidently **recommend** the agency to teams that value clarity and execution.",
    socialIcon: icons.xIocn,
  },
  {
    name: "Bode Usman",
    role: "CEO, Hawkish Group",
    avatar: images.testimonial_Img2,
    text: "During his time at Hawkish Group, Bright Orji consistently demonstrated **strong leadership and operational clarity.** Managing multiple projects simultaneously, he proved himself capable, reliable, and highly adaptable. His ability to quickly understand systems, processes, and project requirements made him a valuable asset to the team.",
    socialIcon: "linkedin", 
  },
  {
    name: "Ezra Bernard",
    role: "Full-Stack Developer",
    avatar: images.testimonial_Img3,
    text: "I had a great experience collaborating with **ShipWithYuki**. Their **creativity, precision, and openness to feedback** made the workflow smooth and efficient. The level of professionalism throughout stood out, and I look forward to future collaborations.",
    socialIcon: icons.xIocn,
  },
];

const Testimonials: React.FC = () => {
  // Component to render text with bold parts
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-[#262626]">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section className='bg-white pt-6'>
             <div className='text-center mb-[40px]'>
                   <h1 className='text-[#262626] 2xl:text-[40px] font-medium leading-[100%] tracking-[0.01em]'>Built with ambitious founders</h1>
                   <p className='text-[#3A3A3A] 2xl:text-[18px] font-normal leading-[160%] mt-1.5 tracking-[0.02em]'>Founders and teams we’ve designed and shipped with and what they say about the experience.</p>
              </div>

     <div className="relative py-12 px-4 bg-[#FCFCFC] overflow-hidden ">
           
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='28' y2='28' stroke='%23000000' stroke-width='1' stroke-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '16px 16px',
        }}
      />

      <div className="section-container relative z-10 2xl:w-[1428.25px] xl:w-[1240px] ">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="testimonial-swiper "
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto flex">
              <div className="bg-[#FFFFFF] border-[3px] border-[#EFEFEF] 2xl:rounded-[25px] p-[16px] h-full w-full flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="flex justify-between items-start mb-[12px]">
                  <div className="flex items-center gap-2">
                    <div className="w-[56px] h-[56px] rounded-[17.5px] overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="2xl:text-[18px] font-medium text-[#262626] leading-[100%] mb-0.5 tracking-[0.02em]">
                        {testimonial.name}
                      </h4>
                      <p className="2xl:text-[15px] text-[#3A3A3A] font-normal leading-[160%] tracking-[0.02em]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 mt-1">
                    {testimonial.socialIcon === "linkedin" ? (
                      <div className="w-5 h-5 opacity-40">
                         <img src={icons.linkedinIcon} alt="" />
                      </div>
                    ) : (
                      <img src={testimonial.socialIcon} alt="X" className="w-5 h-5 opacity-40" />
                    )}
                  </div>
                </div>
                
                <div className="2xl:text-[16px] leading-[1.65] text-[#3A3A3A] font-normal tracking-[0.02em]">
                  {renderText(testimonial.text)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .testimonial-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #E5E5E5;
          opacity: 1;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #262626;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
      </div>
    </section>
  );
};

export default Testimonials;
