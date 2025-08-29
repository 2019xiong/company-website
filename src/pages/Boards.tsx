import LeaderBoard from "../components/Leaderboard";

const Boards: React.FC = () => {
  const examDesc = {
    name: "Human's Last Exam",
    desc: "Challenging LLMs at the frontier of human knowledge"
  }
  const entities = [
    {
      modelName: "gpt-5-2025-08-07",
      company: "OpenAI",
      rank: 1,
      range: {
        centralValue: 25.32,
        uncertainty: 1.70
      },
      isNew: true,
      alertMsg: ""
    },
    {
      modelName: "gemini-2.5-pro-preview-06-05",
      company: "Google DeepMind",
      rank: 2,
      range: {
        centralValue: 21.64,
        uncertainty: 1.61
      },
      isNew: false,
      alertMsg: ""
    },
    {
      modelName: "o3 (high) (April 2025)",
      company: "OpenAI",
      rank: 2,
      range: {
        centralValue: 20.32,
        uncertainty: 1.58
      },
      isNew: false,
      alertMsg: ""
    },
    {
      modelName: "claude-opus-4-1-20250805-thinking",
      company: "Anthropic",
      rank: 10,
      range: {
        centralValue: 11.52,
        uncertainty: 1.25
      },
      isNew: false,
      alertMsg: ""
    }
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <LeaderBoard examDesc={examDesc} modelScores={entities}/>
      <LeaderBoard examDesc={examDesc} modelScores={entities}/>
      <LeaderBoard examDesc={examDesc} modelScores={entities}/>
      <LeaderBoard examDesc={examDesc} modelScores={entities}/>
    </div>
  )
}

export default Boards;