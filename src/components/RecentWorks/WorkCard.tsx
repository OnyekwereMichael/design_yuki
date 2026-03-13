import React from 'react';
import { icons } from '../../constants';

interface WorkCardProps {
  image?: string;
  title: string;
  category: string;
  link?: string;
  bgColor?: string;
  className?: string;
  children?: React.ReactNode;
}

const WorkCard: React.FC<WorkCardProps> = ({ 
  image, 
  title, 
  category, 
  bgColor = 'transparent',
  className = '',
  children 
}) => {
  return (
    <div className={`group flex flex-col gap-[32px] w-full ${className}`}>

      <div 
        className={`relative overflow-hidden rounded-[32px] transition-all duration-500 w-full`}
        style={{ backgroundColor: bgColor }}
      >
        {/* Content Area */}
        <div className="w-full ">
            {children ? children : (
              image && <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-contain object-center "
                />
              </div>
            )}
        </div>
      </div>
      
      {/* Text Info */}
      <div className="flex flex-col gap-[8px] px-1">
        <div className="flex items-center gap-3 group cursor-pointer">
          <h3 className="text-[24px] xl:text-[28px] 2xl:text-[32px] font-normal text-[#262626] tracking-tight">{title}</h3>
           <img src={icons.arrowRight} alt="arrow right" className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <p className="xl:text-[15px] leading-[150%] 2xl:text-[16px] text-[#3A3A3A] tracking-[0.02em] font-normal">{category}</p>
      </div>
    </div>
  );
};

export default WorkCard;
