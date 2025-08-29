import { CircleAlert } from "lucide-react"

const TagNew: React.FC = () => {
  return (
    <div className="text-black text-[8px] px-[4px] font-bold leading-[16px] h-[16px] mt-[3px] bg-[#9CA3AF] rounded-[4px] tracking-widest">NEW</div>
  )
}

interface ScoreItemEntity {
  modelName: string,
  rank: number,
  range: {
    centralValue: number,
    uncertainty: number
  },
  isNew: boolean,
  alertMsg: string
}

interface ScoreItemProps {
  entity: ScoreItemEntity,
}

const ScoreItem: React.FC<ScoreItemProps> = ({ entity }) => {

  const percetageStyle = {
    width: "29.53%",
    backgroundColor: "rgb(116, 170, 156)"
  }
  const leftBarStyle = {
    left: "27.55%",
    top: "50%",
    transform: "translateY(-50%)"
  }
  const rightBarStyle = {
    left: "31.51%",
    top: "50%",
    transform: "translateY(-50%)"
  }
  const centerBarStyle = {
    left: "27.55%",
    width: "3.97%",
    transform: "translateY(-50%)"
  }

  return (
    <div className="flex gap-3">
      <div className="flex items-center justify-center shrink-0 w-10 h-10 text-gray-400 rounded-md bg-stone-800">
        <span className="text-sm">{entity.rank}</span>
      </div>
      <div className="flex flex-col justify-between grow overflow-hidden">
        <div className="flex items-center align-bottom pb-[2px] h-[22px] gap-x-2">
          {/* TODO: 还有一个data-state标签，值为closed */}
          <button type="button" className="overflow-hidden text-left cursor-pointer text-white/70 touch-manipulation">
            <div className="flex items-center gap-2">
              <p className="text-sm overflow-hidden text-ellipsis whitespace-nowrap min-w-0 text-white/70" title={entity.modelName}>{entity.modelName}</p>
              {entity.isNew && <TagNew />}
              <CircleAlert className="shrink-0 inline-block w-4 h-4 mt-[2px]" />
            </div>
          </button>
          <p className="ml-auto text-xs text-nowrap space-x-1.5">
            <span className="text-white">{entity.range.centralValue}</span>
            <span className="text-gray-400">{"±"}{entity.range.uncertainty}</span>
          </p>
        </div>
        {/* TODO: 还有一个data-state标签，值为closed */}
        <button className="w-full">
          <div className="relative h-[14px] overflow-hidden rounded-[4px] bg-white/10">
            <div className="absolute top-0 left-0 h-full transition-all rounded-s-[4px] duration-1000" style={percetageStyle}></div>
            <div className="absolute top-1/2 h-[2px] bg-white" style={centerBarStyle}></div>
            <div className="absolute h-2 w-[2px] bg-white" style={leftBarStyle}></div>
            <div className="absolute h-2 w-[2px] bg-white" style={rightBarStyle}></div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ScoreItem;