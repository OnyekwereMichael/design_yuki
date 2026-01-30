import React from "react";
import { icons, images } from "../../constants";

export default function About() {
  return (
    <section className="min-h-screen bg-white  text-white px-6 lg:px-20 py-24">
      <div className="mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-28 items-start">
        {/* LEFT CONTENT */}
        <div className="space-y-8 col-span-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-b from-[#575757] to-[#262626] text-sm text-white h-[44px]">
            <img src={icons.sparkles} alt="sparkles" />
            <span className="font-medium text-sm tracking-wide">Behind ShipWithYuki</span>
          </div>

          {/* Main copy */}
          <div>
          <p className="text-[24px] font-[400] leading-relaxed text-[#262626]  ">
            I help early-stage founders turn messy ideas into products people actually want to use.
            ShipWithYuki is a small, founder-led design studio. I work hands-on from early thinking to
            shipped screens, focusing on clarity, usability, and execution. No long handoffs, no
            design theatre. Just thoughtful design that helps teams move fast without breaking things.
            I care about how products feel in real life. The small decisions, the flow between
            screens, the moments that make something click. That’s where good design lives.
          </p>

          <p className="italic text-[24px] font-[400] leading-relaxed text-[#262626] font-instrument-serif ">Design should feel obvious once it ships.</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-4 col-span-1">
          <p className="text-[15px] font-[400] text-[#262626] ">
            Working closely with founders, not as a vendor, but as a design partner. Clear thinking,
            fast iterations, and work that respects both users and business goals.
          </p>

          <div className="relative rounded-2xl overflow-hidden bg-[#111]">
            <img
              src={images.aboutImg}
              alt="Design workspace"
              className="w-full h-auto object-cover grayscale"
            />
          </div>

          <p className="italic font-instrument-serif text-[17px] font-[400] text-[#262626]">Clear design, shipped fast.</p>
        </div>
      </div>
    </section>
  );
}
