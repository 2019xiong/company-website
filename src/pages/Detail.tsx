import { useLocation, useParams } from "react-router-dom";
import ScoreItem from "../components/Leaderboard/ScoreItem";
import type { ModelScore } from "../types";

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation();
  const entities = state as ModelScore[];
  return (
    // <div className="flex bg-[#1A1A1A]/80">
    //   <div className="flex-1 bg-amber-300">{id}</div>
    //   <div className=" flex-2 flex flex-col gap-3 mt-4 mb-4">
    //     {
    //       entities.map((entity, index) => (
    //         <div key={index} className="transition-opacity duration-300 border-white/10">
    //           <ScoreItem entity={entity} />
    //         </div>
    //       ))
    //     }
    //   </div>
    // </div>
    <div className="min-h-screen bg-black ">
      <div className="container py-8 mx-auto overflow-hidden lg:max-w-[1312px]">
        <h1 className="text-white text-4xl font-medium font-aeonik mb-8">{id}</h1>
        <div className="flex flex-col-reverse lg:flex-row lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="flex-1 mb-8 lg:max-w-screen-sm lg:mb-0 mt-20 lg:mt-0">
            <div className="text-white">
              description
            </div>
          </div>
          <div>
            <div className="space-y-6 text-gray-300">
              <h2 className="text-xl text-white font-aeonik">Performance Comparision</h2>
              <div className="relative">
                <div className="space-y-3 overflow-auto h-auto">
                  {entities.map((entity, index) => <ScoreItem key={index} entity={entity} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Detail;