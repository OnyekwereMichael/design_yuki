import { useEffect, useRef, useState } from 'react';
import { projects } from '../../constants/MockData';


const ProjectSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isPaused || isDragging) return;

    let animationId: number;
    let scrollPos = slider.scrollLeft;

    const animate = () => {
      scrollPos += 0.5; 
      
    
      if (scrollPos >= slider.scrollWidth / 2) {
        scrollPos = 0;
      }
      
      slider.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isDragging]);

  // Mouse/Touch handlers for swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="relative bg-[#FFFFFF] rounded-tr-[25px] rounded-tl-[25px] overflow-hidden mt-14 2xl:mt-14 ">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='28' y2='28' stroke='%23000000' stroke-width='1' stroke-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '8px 8px',
        }}
      />
      <div 
        ref={sliderRef}
        className="relative z-10 flex gap-4 overflow-x-hidden cursor-grab active:cursor-grabbing select-none px-6 pt-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setIsDragging(false);
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {projects.map((project, index) => (
          <div 
            key={`${project.id}-${index}`}
            className="flex-shrink-0 w-[761px] group"
          >
            {/* Project Card */}
            <div className="relative overflow-hidden rounded-tl-[32px] rounded-tr-[32px] border-[3px] border-[#EFEFEF]  hover:shadow-xl  transition-shadow duration-300">
              <div className=" overflow-hidden ">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover  transition-transform duration-500  "
                  draggable="false"
                />
              </div>
              
              {/* Project Info Overlay */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-white/80">{project.description}</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      {/* <div className="flex justify-center mt-8 gap-2">
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-sm text-gray-500">Drag to explore</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div> */}
    </section>
  );
};

export default ProjectSlider;
