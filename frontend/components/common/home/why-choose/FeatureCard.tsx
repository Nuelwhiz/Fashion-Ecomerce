import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) => {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      p-8
      text-center
      shadow-sm
      border
      border-gray-100
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
    "
    >
      <div
        className="
        w-16
        h-16
        rounded-full
        bg-[#C19A6B]/10
        flex
        items-center
        justify-center
        mx-auto
        mb-6
      "
      >
        <Icon className="w-8 h-8 text-[#C19A6B]" />
      </div>

      <h3 className="text-xl font-bold text-[#1F2937] mb-4">
        {title}
      </h3>

      <p className="text-[#6B7280] leading-7">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;