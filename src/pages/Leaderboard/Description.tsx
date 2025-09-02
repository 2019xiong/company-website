import { Mountain } from "lucide-react"

const DescItem = () => {
  return (
    <div>
      <Mountain className="w-5 h-5 mb-4 text-[#FFB5BA]"/>
      <h3 className="tmb-3 text-base font-medium tracking-tight">Frontier AI Evaluations</h3>
      <p className="text-sm leading-relaxed tracking-tight text-zinc-400">We conduct high-complexity evaluations to expose model failures, prevent benchmark saturation, and push model capabilities —while continuously evaluating the latest frontier models.</p>
    </div>
  )
}

const Description: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid gap-8 md:grid-cols-3">
        <DescItem />
        <DescItem />
        <DescItem />
      </div>
    </div>
  )
}
export default Description;