import LeaderBoard from "./Leaderboard";

const Boards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <LeaderBoard />
      <LeaderBoard />
      <LeaderBoard />
      <LeaderBoard />
      <LeaderBoard />
      <LeaderBoard />
      <LeaderBoard />
      <LeaderBoard />
    </div>
  )
}

export default Boards;