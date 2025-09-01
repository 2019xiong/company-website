import { useLocation, useParams } from "react-router-dom";
import ScoreItem from "../components/Leaderboard/ScoreItem";
import type { ModelScore } from "../types";

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation();
  const entities = state as ModelScore[];
  return (
    <div className="flex bg-[#1A1A1A]/80">
      <div className="flex-1 bg-amber-300">{id}</div>
      <div className=" flex-2 flex flex-col gap-3 mt-4 mb-4">
        {
          entities.map((entity, index) => (
            <div key={index} className="transition-opacity duration-300 border-white/10">
              <ScoreItem entity={entity} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Detail;