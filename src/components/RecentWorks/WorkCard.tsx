import React from 'react';
import { icons } from '../../constants';

interface WorkCardProps {
  image?: string;
  title: string;
  category: string;
  link?: string;
  layout?: 'landscape' | 'portrait';
  bgColor?: string;
  className?: string;
  children?: React.ReactNode;
}

const WorkCard: React.FC<WorkCardProps> = ({ 
  image, 
  title, 
  category, 
  layout = 'landscape', 
  className = '',
  children 
}) => {
  return (
    <div className={`group flex flex-col gap-6 ${layout === 'portrait' ? 'row-span-2' : ''} ${className}`}>

      <div 
        className={`relative overflow-hidden rounded-[40px]  p-0 transition-transform duration-500 w-full`}
      >
        {/* Content Area */}
        <div className="w-full h-full min-h-[400px] flex items-center justify-center relative">
            {children ? children : (
              image && <div className="w-full h-full flex items-center justify-center ">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-contain object-center  transition-transform duration-700 "
                />
              </div>
            )}
        </div>
      </div>
      
      {/* Text Info */}
      <div className="flex flex-col gap-1 px-1">
        <div className="flex items-center gap-3 group cursor-pointer">
          <h3 className="xl:text-[29px] 2xl:text-[32px] 2xl:leading-[150%] xl:leading-[160%] font-normal text-[#262626] tracking-tight">{title}</h3>
           <img src={icons.arrowRight} alt="arrow right" />
        </div>
        <p className="2xl:text-[16px] text-[15px] 2xl:leading-[150%] xl:leading-[160%] text-[#262626] font-normal">{category}</p>
      </div>
    </div>
  );
};

export default WorkCard;
