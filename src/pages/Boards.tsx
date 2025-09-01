import { useState, useEffect } from "react";
import LeaderBoard from "../components/Leaderboard";
import { fetchLeaderBoard } from "../api/Leaderboard";
import type { ExamResponse } from "../types";

const Boards: React.FC = () => {
  const [exams, setExams] = useState<ExamResponse[]>([]);
  useEffect(() => {
    fetchLeaderBoard().then(data => {
      setExams(data);
    })
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
          exams.map((entity, index) => (
            <LeaderBoard key={index} examDesc={entity.examDesc} modelScores={entity.modelScores} />
          ))
        }
      </div>
    </div>
  )
}

export default Boards;