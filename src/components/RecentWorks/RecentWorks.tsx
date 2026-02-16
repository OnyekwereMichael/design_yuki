
import React from 'react';
import { images } from '../../constants';
import WorkCard from './WorkCard';

const RecentWorks = () => {
  return (
    <section id="work" className="px-6 lg:px-20 bg-gradient-to-b from-[#F8F8F8] to-[#22222222]  py-24max-w-[1400px] mx-auto">
      <h2 className="text-[32px] font-medium text-[#262626] my-16 tracking-tight">My Recent Works</h2>
      
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Left Column - Starts lower */}
        <div className="flex-1 flex flex-col gap-12 pt-24">
          
          {/* Card 1: Every Second Counts */}
          <WorkCard
            title="Every Second Counts"
            category="Branding, Mobile App, Illustrations"
            image={images.project1} 
            bgColor="bg-[#F0F2FF]"
          />

          {/* Card 2: Afro-X */}
          <WorkCard
            title="Afro-X"
            category="Web design"
            image={images.project5} 
            bgColor="bg-[#F0F2FF]"
          >
             <div className="w-full h-full p-8 flex items-center justify-center">
                 <img src={images.project3} alt="Afro X" className="w-full h-auto shadow-2xl rounded-lg" />
             </div>
          </WorkCard>

           {/* Card 3: Mindinglyfe redesign App */}
           <WorkCard
            title="Mindinglyfe redesign App"
            category="Mobile Design"
            image={images.project7} 
            bgColor="bg-[#FAFAFA]"
          />
        </div>

        {/* Right Column - Starts higher */}
        <div className="flex-1 flex flex-col">
            
            {/* Card 1: Radiant Catalyst Nursery */}
            <div className="mb-12">
              <WorkCard
                title="Radiant Catalyst Nusery (RCN)"
                category="Web design, Development"
                image={images.project2}
                bgColor="bg-[#E6F9E6]"
              />
            </div>

            {/* Card 2: Gbagede mobile App */}
            {/* Join closely with the next item */}
            <div className="mb-6">
              <WorkCard
                title="Gbagede mobile App"
                category="Mobile App Design Rationale, Illustration"
                bgColor="bg-[#FAFAFA]" 
              >
                 <div className="flex items-center justify-center h-full w-full p-12">
                    <img src={images.project4} alt="Gbagede" className="w-full h-auto object-contain" />
                 </div>
              </WorkCard>
            </div>

            {/* Card 3: Mindinglyfe Landing Page */}
            <WorkCard
              title="Mindinglyfe Landing Page"
              category="Web Design"
              image={images.project6}
              bgColor="bg-[#FFF5F5]"
            />
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
