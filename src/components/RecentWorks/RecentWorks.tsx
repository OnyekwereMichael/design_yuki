
import { images } from '../../constants';
import WorkCard from './WorkCard';

const RecentWorks = () => {
  return (
    <section id="work" className="px-4 md:px-0 bg-white  pt-28">
      <div className='section-container max-w-[1428px] mx-auto'>
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="xl:text-[40px] 2xl:text-[40px] font-medium text-[#262626] tracking-tight leading-tight">MVPs We’ve Shipped</h2>
          <p className="text-[16px] md:text-[20px] text-[#737373] mt-1 max-w-[600px]">Digital products designed and shipped for ambitious founders.</p>
        </div>
        
        <div className="flex flex-col gap-[34px]">
          
          {/* Row 1: Big Left | Small Right */}
          <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
            <div className="flex-[1.6] w-full">
              <WorkCard
                title="Radiant Catalyst Nusery (RCN)"
                category="Web design"
                image={images.project6}
              
              />
            </div>
            <div className="flex-1 w-full mt-[139px]">
              <WorkCard
                title="Every Second Counts"
                category="Branding, Mobile App, Illustrations"
                image={images.project12}
                
              />
            </div>
          </div>

          {/* Row 2: Small Left | Big Right */}
          <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
            <div className="flex-1 w-full mt-[139px]">
              <WorkCard
                title="Gbagede mobile App"
                category="Mobile App Design Rationale, Illustration"
                image={images.project8}
           
              />
            </div>
            <div className="flex-[1.6] w-full">
              <WorkCard
                title="Afro-X Capital"
                category="Web design"
                image={images.project14}
              
              />
            </div>
          </div>

          {/* Row 3: Big Left | Small Right */}
          <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
            <div className="flex-[1.6] w-full">
              <WorkCard
                title="Mindinglyfe Landing Page"
                category="Web Design"
                image={images.project10}
             
              />
            </div>
            <div className="flex-1 w-full mt-[139px]">
              <WorkCard
                title="Mindinglyfe redesign App"
                category="Mobile Design"
                image={images.project9}
               
              />
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
