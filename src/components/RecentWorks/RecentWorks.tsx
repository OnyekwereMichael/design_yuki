
import { images } from '../../constants';
import WorkCard from './WorkCard';

const RecentWorks = () => {
  return (
    <section id="work" className=" lg:px-20 bg-gradient-to-b from-[#F8F8F8] to-[#22222222] pb-8  py-6 mx-auto ">
      <div className='xl:max-w-[1240px] 2xl:max-w-screen  '>
      <h2 className="text-[32px] font-medium text-[#262626] my-12 tracking-tight">My Recent Works</h2>
      
      <div className="flex flex-col md:flex-row gap-8 lg:gap-8">
        
        {/* Left Column - Starts lower */}
        <div className="flex-1 flex flex-col gap-12 pt-24">
          <WorkCard
            title="Every Second Counts"
            category="Branding, Mobile App, Illustrations"
            image={images.project12} 
            
          />



          {/* Card 2: Afro-X */}
          <WorkCard
            title="Afro-X"
            category="Web design"
            image={images.project5} 
            className="md:-mr-4 mt-4 lg:-mr-12 z-10 [&>div]:rounded-r-none [&_img]:object-cover"
          >
          </WorkCard>

           {/* Card 3: Mindinglyfe redesign App */}
           
             <div className='mr-12'>
            <WorkCard
              title="Mindinglyfe redesign App"
              category="Mobile Design"
              image={images.project9} 
            />
            </div>
        
        </div>

        {/* Right Column - Starts higher */}
        <div className="flex-1 flex flex-col">
            
            {/* Card 1: Radiant Catalyst Nursery */}
            <div className="mb-12">
              <WorkCard
                title="Radiant Catalyst Nusery (RCN)"
                category="Web design, Development"
                image={images.project11}
        
              />
            </div>

       
            <div className="mb-6">
              <div className='ml-12'>
              <WorkCard
                title="Gbagede mobile App"
                category="Mobile App Design Rationale, Illustration"
                image={images.project8}
              >
                
                
              </WorkCard>
              </div>
            </div>


            <WorkCard
              title="Mindinglyfe Landing Page"
              category="Web Design"
              image={images.project10}
              className="md:-ml-4 lg:-ml-12  mt-1 z-10 [&>div]:rounded-l-none [&_img]:object-cover"
            />
            </div>
       
      </div>
      </div>
    </section>
  );
};

export default RecentWorks;
