import FeatureCard from "./FeatureCard";
import { whyChooseData } from "./WhyChooseData";

const WhyChoose = () => {
  return (
    <section className="bg-[#FAF7F2] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="text-[#C19A6B] font-semibold uppercase tracking-widest mb-4">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Why Choose EMIFEX
          </h2>

          <p className="text-[#6B7280] text-lg leading-8">
            We combine exceptional craftsmanship, premium fabrics,
            and personalized tailoring to create outfits that
            inspire confidence and elegance.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {whyChooseData.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;