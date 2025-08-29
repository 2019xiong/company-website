import { Brain } from "lucide-react";

const Title: React.FC = () => {
  return (
    <div>
      <div className="flex gap-2 mb-2">
        <Brain className="w-5 h-5 mt-0.5 text-white/75" />
        <span className="text-base font-medium text-white transition-colors text-pretty">Human's Last Exam</span>
      </div>
      <span className="text-sm transition-colors text-zinc-400">Challenging LLMs at the frontier of human knowledge</span>
    </div>
  );
}

export default Title;