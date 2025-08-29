import Title from "./Title";
import ScoreItem from "./ScoreItem";

const LeaderBoard: React.FC = () => {
  return (
    <a className="rounded-lg p-6 flex flex-col justify-between transition-all duration-300 
    bg-[#1A1A1A]/80 hover:bg-[#2A2A2A]/80 group relative overflow-hidden" href="">
      <Title />
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-3 mt-4 mb-4">
          <ScoreItem />
          <ScoreItem />
          <ScoreItem />
        </div>
        <span className="text-[#a1a1aa] text-sm">View Full Ranking →</span>
      </div>
    </a>
  )
}

export default LeaderBoard;