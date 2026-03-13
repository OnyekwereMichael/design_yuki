import { icons, images } from "../../constants";

export default function About() {
  return (
    <section className=" bg-white  text-white  pt-24 ">
      <div className="section-container 2xl:w-[1428px] xl:w-[1240px]   grid grid-cols-1 lg:grid-cols-3 gap-28 items-start">
      
        <div className="space-y-8 col-span-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-b from-[#575757] to-[#262626] text-sm text-white h-[44px]">
            <img src={icons.sparkles} alt="sparkles" />
            <span className="font-medium 2xl:text-[15px] xl:text-[14px] tracking-[0.02em]">Behind ShipWithYuki</span>
          </div>

          <div className="2xl:w-[823px] xl:w-[709px]">
          <p className="2xl:text-[28px] xl:text-[24px] font-[400] leading-[160%] text-[#262626] tracking-[0.02em]  ">
            I help early-stage founders turn messy ideas into products people actually want to use.
            ShipWithYuki is a small, founder-led design studio. I work hands-on from early thinking to
            shipped screens, focusing on clarity, usability, and execution. No long handoffs, no
            design theatre. Just thoughtful design that helps teams move fast without breaking things.
            I care about how products feel in real life. The small decisions, the flow between
            screens, the moments that make something click. That’s where good design lives.
          </p>

          <p className="italic 2xl:text-[28px] xl:text-[24px] font-[400] leading-relaxed text-[#262626] font-instrument-serif ">Design should feel obvious once it ships.</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-4 col-span-1">
          <p className="2xl:text-[16px] xl:text-[15px] font-[400] text-[#3A3A3A] tracking-[0.02em]">
            Working closely with founders, not as a vendor, but as a design partner. Clear thinking,
            fast iterations, and work that respects both users and business goals.
          </p>

          <div className="relative rounded-[10px] overflow-hidden bg-[#111]">
            <img
              src={images.aboutImg}
              alt="Design workspace"
              className="w-full object-cover grayscale"
            />
          </div>

          <p className="italic font-instrument-serif 2xl:text-[20px] xl:text-[17px] font-[400] text-[#3A3A3A]">Clear design, shipped fast.</p>
        </div>
      </div>
    </section>
  );
}
