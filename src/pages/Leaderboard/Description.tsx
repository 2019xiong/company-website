import { Mountain, PencilRuler, Shield } from "lucide-react"
import type { LucideProps } from "lucide-react";

interface DescItemProps {
  title: string;
  content: string;
  icon: React.ElementType<LucideProps>;
  color: string;
}

const DescItem: React.FC<DescItemProps> = ({ title, content, icon: Icon, color}) => {
  return (
    <div>
      <Icon className={`w-5 h-5 mb-4 ${color}`} />
      <h3 className="mb-3 text-base font-medium tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed tracking-tight text-zinc-400">{content}</p>
    </div>
  )
}

const data: DescItemProps[] = [
  {
    title: "Frontier AI Evaluations",
    content: "We conduct high-complexity evaluations to expose model failures, prevent benchmark saturation, and push model capabilities —while continuously evaluating the latest frontier models.",
    icon: Mountain,
    color: "text-[#FFB5BA]"
  },
  {
    title: "Scaling with Human Expertise",
    content: "Humans design complex evaluations and define precise criteria to assess models, while LLMs scale evaluations—ensuring efficiency and alignment with human judgment.",
    icon: PencilRuler,
    color: "text-[#B5E6FF]"
  },
  {
    title: "Robust Datasets",
    content: "Our leaderboards are built on carefully curated evaluation sets, combining private datasets to prevent overfitting and open-source datasets for broad benchmarking and comparability.",
    icon: Shield,
    color: "text-[#B5FFD9]"
  }
]

const Description: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid gap-8 md:grid-cols-3">
        {data.map((item, index) => (
          <DescItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
export default Description;