import { Link } from "react-router-dom";
import Title from "./Title";
import ScoreItem from "./ScoreItem";

const LeaderBoard: React.FC = () => {
  const examDesc = {
    name: "Human's Last Exam",
    desc: "Challenging LLMs at the frontier of human knowledge"
  }
  const entities = [
    {
      modelName: "gpt-5-2025-08-07",
      company: "OpenAI",
      rank: 1,
      range: {
        centralValue: 25.32,
        uncertainty: 1.70
      },
      isNew: true,
      alertMsg: ""
    },
    {
      modelName: "gemini-2.5-pro-preview-06-05",
      company: "Google DeepMind",
      rank: 2,
      range: {
        centralValue: 21.64,
        uncertainty: 1.61
      },
      isNew: false,
      alertMsg: ""
    },
    {
      modelName: "o3 (high) (April 2025)",
      company: "OpenAI",
      rank: 2,
      range: {
        centralValue: 20.32,
        uncertainty: 1.58
      },
      isNew: false,
      alertMsg: ""
    },
    {
      modelName: "claude-opus-4-1-20250805-thinking",
      company: "Anthropic",
      rank: 10,
      range: {
        centralValue: 11.52,
        uncertainty: 1.25
      },
      isNew: false,
      alertMsg: ""
    }
  ]
  return (
    <Link className="rounded-lg p-6 flex flex-col justify-between transition-all duration-300 
    bg-[#1A1A1A]/80 hover:bg-[#2A2A2A]/80 group relative overflow-hidden" to={`${examDesc.name}`}>
      <div className="flex flex-col justify-between h-full">
        <Title examDesc={examDesc} />
        <div>
          <div className="flex flex-col gap-3 mt-4 mb-4">
            {
              entities.slice(0, 3).map((entity, index) => (
                <div className="transition-opacity duration-300 border-white/10">
                  <ScoreItem key={index} entity={entity} />
                </div>
              ))
            }
          </div>
          <span className="text-[#a1a1aa] text-sm">View Full Ranking →</span>
        </div>
      </div>
    </Link>
  )
}

export default LeaderBoard;