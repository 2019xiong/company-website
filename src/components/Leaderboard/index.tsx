import { Link } from "react-router-dom";
import Title from "./Title";
import ScoreItem from "./ScoreItem";
import type { ModelScore, ExamDesc } from "../../types";

interface LeaderboardProps {
  examDesc: ExamDesc;
  modelScores: ModelScore[];
}

const LeaderBoard: React.FC<LeaderboardProps> = ({ examDesc, modelScores: entities }) => {
  return (
    <Link className="rounded-lg p-6 flex flex-col justify-between transition-all duration-300 
    bg-[#1A1A1A]/80 hover:bg-[#2A2A2A]/80 group relative overflow-hidden" to={`${examDesc.name}`}>
      <div className="flex flex-col justify-between h-full">
        <Title examDesc={examDesc} />
        <div>
          <div className="flex flex-col gap-3 mt-4 mb-4">
            {
              entities.slice(0, 3).map((entity, index) => (
                <div key={index} className="transition-opacity duration-300 border-white/10">
                  <ScoreItem entity={entity} />
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