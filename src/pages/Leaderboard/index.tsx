import Description from "./Description";

const Leaderboard: React.FC = () => {
  return (
    <div className="min-h-screen text-xs text-white bg-black relative">
      <header className="sticky top-0 z-30 w-full border-b bg-black/30 backdrop-blur-md border-white/10">this is header</header>
      <section>1</section>
      <section>2</section>
      <section>
        <Description />
      </section>
      <footer className="w-full py-6 border-t border-white/10">this is footer</footer>
    </div>
  );
};
export default Leaderboard;