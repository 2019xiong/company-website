import Description from "./Description";
import Introduction from "./Introduction";
import Boards from "./Boards";

const Leaderboard: React.FC = () => {
  return (
    <div className="min-h-screen text-xs text-white bg-black relative">
      <header className="sticky top-0 z-30 w-full border-b bg-black/30 backdrop-blur-md border-white/10">this is header</header>
      <section>
        <Introduction />
      </section>
      <section>
        <Boards />
      </section>
      <section>
        <Description />
      </section>
      <footer className="w-full py-6 border-t border-white/10">this is footer</footer>
    </div>
  );
};
export default Leaderboard;