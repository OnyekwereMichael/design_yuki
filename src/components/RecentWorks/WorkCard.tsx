import React from 'react';

interface WorkCardProps {
  image?: string;
  title: string;
  category: string;
  link?: string;
  layout?: 'landscape' | 'portrait';
  bgColor?: string;
  children?: React.ReactNode;
}

const WorkCard: React.FC<WorkCardProps> = ({ 
  image, 
  title, 
  category, 
  layout = 'landscape', 
  children 
}) => {
  return (
    <div className={`group flex flex-col gap-6 ${layout === 'portrait' ? 'row-span-2' : ''}`}>

      <div 
        className={`relative overflow-hidden rounded-[40px]  p-0 transition-transform duration-500 hover:scale-[1.02] w-full`}
      >
        {/* Content Area */}
        <div className="w-full h-full min-h-[400px] flex items-center justify-center relative">
            {children ? children : (
              image && <div className="w-full h-full flex items-center justify-center ">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-contain object-center drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
        </div>
      </div>
      
      {/* Text Info */}
      <div className="flex flex-col gap-1 px-1">
        <div className="flex items-center gap-3 group cursor-pointer">
          <h3 className="text-[22px] font-medium text-[#1a1a1a] tracking-tight">{title}</h3>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transform transition-transform group-hover:translate-x-1 duration-300 text-[#1a1a1a]"
          >
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-[15px] text-[#666] font-normal">{category}</p>
      </div>
    </div>
  );
};

export default WorkCard;
