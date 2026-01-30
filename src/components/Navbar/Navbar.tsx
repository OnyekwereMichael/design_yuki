const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a 
          href="/" 
          className="inline-flex items-center px-5 py-3 bg-gradient-to-b from-[#575757] to-[#262626] text-white text-[15px] font-bold rounded-full hover:bg-[#2a2a2a] transition-all duration-200 tracking-wide hover:-translate-y-0.5"
        >
        <p className="tracking-wide">ShipWithYuki</p>
        </a>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Spots Badge */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white rounded-[25px]">
          <section>
  <div className="relative w-5 h-5 bg-[#C2FFCD] rounded-full animate-pulse-dot flex items-center justify-center">
    <div className="w-2 h-2 bg-[#46DC74] rounded-full animate-pulse-dot"></div>
  </div>
</section>

            <span className="text-[15px] font-[400]  text-[#262626]">5 spots open for January</span>
          </div>

          {/* Menu Button */}
          <button 
            className="flex items-center gap-2 pl-5 px-3 py-2 bg-white rounded-[25px] hover:border-gray-300 hover:bg-gray-100 transition-all duration-200"
            aria-label="Menu"
          >
            <span className="text-[15px] text-[#262626] font-medium">Menu</span>
            <span className="flex items-center justify-center w-7 h-7 bg-gradient-to-b from-[#575757] to-[#262626] rounded-full flex-col gap-[3px]">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full mt-[0.9px]"></span>
          
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
