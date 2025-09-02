import { Link } from "react-router-dom";
import { Triangle, Search } from "lucide-react";
import Description from "./Description";
import Introduction from "./Introduction";
import Boards from "./Boards";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-black/30 backdrop-blur-md border-white/10">
      <div className="container mx-auto p-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link to="/leaderboard">
            <Triangle className="w-auto h-6 mb-[4px]" />
          </Link>
          <div className="h-6 after:absolute after:h-6 after:w-px after:bg-white/15"></div>
          <Link to="/leaderboard" >
            <div className="text-2xl">
              OneStar
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <button type="button" className="p-2 rounded-full hover:bg-zinc-800/50 transition-colors flex items-center gap-1">
              <Search />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

const Leaderboard: React.FC = () => {
  return (
    <div className="min-h-screen text-xs text-white bg-black relative">
      <Header />
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