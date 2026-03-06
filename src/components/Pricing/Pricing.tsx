import React from "react";
import { icons } from "../../constants";

const Pricing: React.FC = () => {
  const tiers = [
    {
      badge: "Most Popular",
      title: "MVP Design Starter",
      description: "For founders who need a clean, usable v1 to test an idea \nfast.",
      price: "$999",
      period: " / One-Time",
      duration: "7-10 Days",
      buttonText: "Schedule a call",
      features: [
        "Product direction & feature scoping",
        "Core user flows",
        "High-fidelity UI for key screens",
        "Basic design system (type, colors, buttons)",
        "Developer-ready Figma files",
        "One focused refinement round"
      ]
    },
    {
      badge: "Best Value",
      title: "MVP Design Standard",
      description: 
      "For teams building a serious MVP with room to \ngrow.",
      price: "$1,499",
      period: " / One-Time Or Milestone-Based",
      duration: "14-21 Days",
      buttonText: "Schedule a call",
      features: [
        "Product thinking & UX structure",
        "Complete user flows and edge cases",
        "High-fidelity UI across core features",
        "Scalable design system",
        "Iterations based on usability and feedback",
        "Developer handoff support"
      ]
    },
    {
      badge: "Trusted By Teams",
      title: "Design Partner",
      description: "Best for teams that need continuous updates and ongoing \nsupport.",
      price: "$1,999",
      period: " / One-Time Or Milestone-Based",
      duration: "Limited Slots",
      buttonText: "Schedule a call",
      features: [
        "Ongoing product & UI design",
        "Feature improvements and experiments",
        "Fast iteration cycles",
        "Design system evolution",
        "Async collaboration",
        "Priority turnaround"
      ]
    }
  ];

  return (
    <section className="bg-white pt-24 px-4">
      <div className="2xl:max-w-[1377px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-[40px] font-medium text-[#262626] mb-2 tracking-tight leading-tight">
            Clear Pricing For <span className="italic font-serif font-normal">Shipping Real Products</span>
          </h2>
          <p className="text-[18px] text-[#525252] font-normal max-w-3xl mx-auto">
            Simple design scopes built to help founders move fast without guessing timelines, costs, or next steps.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#F8F8F8] 2xl:p-[24px] 2xl:rounded-[45px]">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className="bg-white 2xl:rounded-[25px] 2xl:h-[638px] 2xl:w-[427px] 2xl:p-[24px] flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
            {/* Badge */}
<div className="mb-6">
  <span className="bg-gradient-to-b from-[#575757] to-[#262626] text-[#FFFFFF] leading-[100%] 2xl:text-[13px] font-medium 2xl:p-[12px] 2xl:rounded-[25px] 2xl:h-[40px] inline-flex items-center justify-center">
    {tier.badge}
  </span>
</div>

              <div className="mb-5">
                <h3 className="2xl:text-[21px] font-medium text-[#262626] mb-2 leading-[100%]">
                  {tier.title}
                </h3>
                <p className="2xl:text-[16px] text-[#3A3A3A] leading-[150%] font-normal whitespace-pre-line">
                  {tier.description}
                </p>
              </div>

              {/* Price Section */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="2xl:text-[32px] font-medium text-[#262626] leading-[100%]">{tier.price}</span>
                  <span className="2xl:text-[16px] text-[#262626] font-medium">{tier.period}</span>
                </div>
                <p className="text-[15px] text-[#262626] font-medium mt-2.5 leading-[100%]">
                  {tier.duration}
                </p>
              </div>

              {/* Demarcation Line */}
              <div className="w-full h-px bg-[#F8F8F8] mb-6"></div>

              {/* Features List */}
              <ul className="flex-1 space-y-4 mb-10">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="w-[24px] h-[24px] rounded-full bg-[#46DC74] border-[1.5px] border-[#46DC74] flex items-center justify-center shrink-0 mt-0.5">
                     <img src={icons.checkIcon} alt=""/>
                    </div>
                    <span className="text-[#606060] 2xl:text-[16px] font-normal leading-tight pt-0.5">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Call to Action Button */}
              <button className="w-full 2xl:h-[56px] 2xl:rounded-[40px] bg-gradient-to-b  py-[12px] px-[20.57px] from-[#575757] to-[#262626] border-[0.86px] border-[#616161] text-white font-bold 2xl:text-[16px] leading-[160%] transition-colors shadow-2xl shadow-[#14141480]]"> 
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        {/* <p className="text-center mt-12 text-[#525252] text-[18px] font-normal font-serif italic">
          Final Pricing Depends On Scope And Complexity. A Short Call Helps Align Expectations Before Starting.
        </p> */}
      </div>
    </section>
  );
};

export default Pricing;
