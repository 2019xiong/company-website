import { Brain } from "lucide-react";
import type { ExamDesc } from "../../types";

interface TitleProps {
  examDesc: ExamDesc
}


const Title: React.FC<TitleProps> = ({ examDesc }) => {
  return (
    <div>
      <div className="flex gap-2 mb-2">
        <Brain className="w-5 h-5 mt-0.5 text-white/75" />
        <span className="text-base font-medium text-white transition-colors text-pretty">{examDesc.name}</span>
      </div>
      <span className="text-sm transition-colors text-zinc-400">{examDesc.desc}</span>
    </div>
  );
}

export default Title;