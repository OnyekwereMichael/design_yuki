import { icons } from "../../constants";

const Pricing: React.FC = () => {
  const tiers = [
    {
      title: "MVP Design Starter",
      description: "For founders who need a clean, usable v1 to test an idea fast.",
      price: "$999",
      period: "/ One-Time",
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
      title: "MVP Design Standard",
      highlight: "(Most Popular)",
      description: "For teams building a serious MVP with room to grow.",
      price: "$1,499",
      period: "/ One-Time Or Milestone-Based",
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
      title: "Design Partner",
      highlight: "(Retainer)",
      description: "For startups that need consistent design support as they ship and iterate.",
      price: "$1,999",
      period: "/ One-Time Or Milestone-Based",
      duration: "Limited Slots",
      buttonText: "Let's talk",
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
    <section className="bg-white pt-24 px-4 md:px-0">
      <div className="section-container 2xl:max-w-5xl xl:max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="2xl:text-[40px] xl:text-[32px] md:text-[32px] font-medium text-[#2E2E2E] mb-1.5 tracking-tight leading-tight">
            Clear Pricing For <span className="italic font-serif font-normal">Shipping Real Products</span>
          </h2>
          <p className="2xl:text-[18px] xl:text-[16px] text-[#2E2E2E] font-normal max-w-2xl mx-auto">
            Simple design scopes built to help founders move fast without guessing timelines, costs, or next steps.
          </p>
        </div>

        <div className="bg-[#F8F8F8] 2xl:rounded-[45px] rounded-[32px] 2xl:p-[20px] xl:p-[18px] flex flex-col gap-4 ">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className="bg-white 2xl:rounded-[38px] xl:rounded-[32px] rounded-[25px] 2xl:px-10 2xl:py-8  xl:px-10 xl:py-8 flex flex-col lg:flex-row gap-5 lg:gap-12 items-stretch 2xl:h-[315px] xl:h-[320px]"
            >
              {/* Left Side: Pricing Info */}
              <div className="flex-1 flex flex-col w-full lg:w-auto">
                <div className="mb-4">
                  <h3 className="2xl:text-[21px] xl:text-[24px] font-medium text-[#262626] mb-1">
                    {tier.title} {tier.highlight && <span className="italic font-serif 2xl:text-[21px] xl:text-[24px] font-medium text-[#262626]">{tier.highlight}</span>}
                  </h3>
                  <p className="text-[#262626] font-normal 2xl:text-[16px] xl:text-[15px] max-w-sm">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="2xl:text-[32px] xl:text-[30px] font-medium text-[#262626]">{tier.price}</span>
                    <span className="text-[#262626] 2xl:text-[16px] xl:text-[15px] font-medium">{tier.period}</span>
                  </div>
                  <p className="text-[#262626] 2xl:text-[15px] xl:text-[14px] font-medium mt-1">
                    {tier.duration}
                  </p>
                </div>

                <button className="w-full mt-auto h-[56px] rounded-full bg-linear-to-b from-[#4a4a4a] to-[#1a1a1a] text-white font-bold 2xl:text-[16px] xl:text-[15px] shadow-2xl transition-opacity">
                  {tier.buttonText}
                </button>
              </div>

              {/* Demarcation Line */}
              <div className="hidden lg:block w-px bg-[#F0F0F0]"></div>

              {/* Right Side: Features List */}
              <div className="flex-1 w-full lg:w-auto">
                <ul className="grid grid-cols-1 gap-y-2">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 py-1 border-b border-[#F0F0F0] last:border-0">
                      <div className="w-6 h-6 rounded-full bg-[#46DC74] border-[1.5px] mb-1 border-[#46DC74] flex items-center justify-center shrink-0">
                        <img src={icons.checkIcon} alt="check" />
                      </div>
                      <span className="text-[#606060] 2xl:text-[16px] xl:text-[15px] font-normal">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-5 text-[#2E2E2E] 2xl:text-[20px] xl:text-[18px] font-normal font-serif">
          Final Pricing Depends On Scope And Complexity. A Short Call Helps Align Expectations Before Starting.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
