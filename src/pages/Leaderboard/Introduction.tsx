import { Button } from "antd";
import { Airplay } from "lucide-react";

const Introduction: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col xl:items-start gap-4 md:gap-10 xl:gap-20 lg:flex-row items-center">
        <div className="flex flex-row xl:items-start gap-6 items-center">
          <div className="h-[120px] md:h-[142px] w-[100px] md:w-[162px] xl:mt-[10px] flex items-center">
            <Airplay className="h-auto w-full max-w-[100px] md:h-auto md:max-h-none md:max-w-[162px]" />
          </div>
          <div className="flex-1 xl:pt-[12px]">
            <h1 className="text-4xl xl:leading-[80px] tracking-tight sm:text-5xl xl:text-[68px] font-inter">
              Leaderboards
            </h1>
          </div>
        </div>
        <div>
          <div className="w-full">
            <p className="mb-8 text-base text-zinc-300 font-inter md:text-[22px] text-pretty">
              SEAL LLM Leaderboards evaluate frontier LLM capabilities. These leaderboards provide insight into models through robust datasets and precise criteria to benchmark the latest AI advancements.
            </p>
            <Button size="large">click me</Button>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Introduction;