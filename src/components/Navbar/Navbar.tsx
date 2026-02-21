import React from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 2xl:py-[56px] xl:py-[40px]">
      <div className=" xl:max-w-[1240px] 2xl:max-w-[1638px] mx-auto  flex justify-between items-center relative px-6 xl:px-0">
        <a 
          href="/" 
          className="inline-flex items-center px-5 py-3 bg-gradient-to-b from-[#575757] to-[#262626] text-white text-[15px] font-bold rounded-full hover:bg-[#2a2a2a] transition-all duration-200 tracking-wide hover:-translate-y-0.5 h-[48px]"
        >
        <p className="tracking-wide">ShipWithYuki</p>
        </a>

        <div className="flex items-center gap-3 relative">
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white rounded-[25px] h-[48px]">
          <section>
          <div className="relative w-5 h-5 bg-[#C2FFCD] rounded-full animate-pulse-dot flex items-center justify-center">
            <div className="w-2 h-2 bg-[#46DC74] rounded-full animate-pulse-dot"></div>
          </div>
        </section>
        
            <button className="text-[15px] font-[400]  text-[#262626]">5 spots open for January</button>
          </div>

          {/* Menu Button */}
          <button 
            className="flex items-center h-[48px] gap-2 pl-5 px-3 py-2 bg-white rounded-[25px]  transition-all duration-200 z-50 relative"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-[15px] text-[#262626] font-medium">Menu</span>
            <span className={`flex items-center justify-center w-7 h-7 bg-gradient-to-b from-[#575757] to-[#262626] rounded-full flex-col gap-[3px] transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full mt-[0.9px]"></span>
          
            </span>
          </button>

          {/* Dropdown Menu */}
          <div className={`absolute top-full right-0 mt-2 w-[300px] bg-white rounded-[32px] p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform origin-top-right transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isMenuOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible pointer-events-none'}`}>
            <div className="flex flex-col p-2">
              <a href="#home" className="px-4 py-3 text-[15px] font-medium text-[#1a1a1a] hover:bg-[#F8F8F8] rounded-xl transition-colors">
                Home
              </a>
              <a href="#work" className="px-4 py-3 text-[15px] font-medium text-[#1a1a1a] hover:bg-[#F8F8F8] rounded-xl transition-colors flex items-center gap-2">
                <span className="font-light">→</span> Work
              </a>
              <a href="#services" className="px-4 py-3 text-[15px] font-medium text-[#1a1a1a] hover:bg-[#F8F8F8] rounded-xl transition-colors">
                Services
              </a>
              <a href="#pricing" className="px-4 py-3 text-[15px] font-medium text-[#1a1a1a] hover:bg-[#F8F8F8] rounded-xl transition-colors">
                Pricing
              </a>
              
              <div className="mt-2">
                <a href="#book" className="flex items-center justify-center w-full py-4 bg-[#262626] text-white text-[15px] font-medium rounded-[20px] hover:bg-black transition-colors">
                  Book a call
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
