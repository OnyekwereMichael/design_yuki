import React from "react";
import { icons } from "../../constants";

const Pricing: React.FC = () => {
  const tiers = [
    {
      badge: "Most Popular",
      title: "MVP Design Starter",
      description: "For founders who need a clean, usable v1 to test an idea \nfast.",
      price: "$999",
      period: " One-Time",
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
      period: " One-Time Or Milestone-Based",
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
      period: "One-Time Or Milestone-Based",
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
    <section className="bg-white pt-28 px-4">
      <div className="2xl:max-w-[1377px] xl:max-w-[1240px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="2xl:text-[40px] xl:text-[32px] font-medium text-[#262626] mb-0.5 xl:mb-1 tracking-[0.01em] leading-tight">
            Clear Pricing For <span className="italic font-serif font-normal tracking-[-0.05em]">Shipping Real Products</span>
          </h2>
          <p className="2xl:text-[18px] xl:text-[16px] text-[#3A3A3A] font-normal max-w-3xl mx-auto tracking-[0.02em]">
            Simple design scopes built to help founders move fast without guessing timelines, costs, or next steps.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#F8F8F8] p-[24px] rounded-[45px]">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[25px] h-[638px] 2xl:w-[427px] xl:w-[381px] p-[24px] flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
            {/* Badge */}
<div className="mb-6">
  <span className="bg-gradient-to-b from-[#575757] to-[#262626] text-[#FFFFFF] leading-[100%] 2xl:text-[14px] xl:text-[13px] font-medium p-[12px] rounded-[25px] h-[40px] xl:h-[36px] inline-flex items-center tracking-[0.01em] justify-center">
    {tier.badge}
  </span>
</div>

              <div className="mb-5">
                <h3 className="text-[21px] font-medium text-[#262626] mb-2 leading-[1.0] tracking-[-0.02em]">
                  {tier.title}
                </h3>
                <p className="text-[16px] text-[#3A3A3A] tracking-[0.02em] leading-[1.5] font-normal 2xl:whitespace-pre-line xl:max-w-[330px] 2xl:max-w-full">
                  {tier.description}
                </p>
              </div>

              {/* Price Section */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-[32px] font-medium text-[#262626] leading-[100%] tracking-[0.01em]">{tier.price}</span>
                    <span className="">
                      / 
                    </span>
                  <span className="2xl:text-[16px] xl:text-[15px] 2xl:tracking-[-0.05em] xl:tracking-[0.02em] text-[#262626] font-medium pr-2">{tier.period}</span>
                </div>
                <p className="text-[15px] tracking-[0.02em] text-[#262626] font-medium 2xl:mt-2.5 xl:mt-3 leading-[100%] mr-2">
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
                    <span className="text-[#606060] tracking-[0.02em] 2xl:text-[16px] font-normal leading-[1.5] pt-0.5">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Call to Action Button */}
              <button className="w-full h-[56px] rounded-[40px] bg-[radial-gradient(ellipse_at_top,#4a4a4a,#1a1a1a)] shadow-2xl shadow-black/40py-[12px] px-[20.57px]  border-[0.86px] border-[#616161] text-white font-bold text-[16px] leading-[1.6] transition-colors"> 
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center mt-7 text-[#2E2E2E] text-[18px] font-normal font-serif  leading-[1.0] ">
          Final Pricing Depends On Scope And Complexity. A Short Call Helps Align Expectations Before Starting.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
