import LeaderBoard from "../components/Leaderboard";
import type { ExamDesc, ModelScore } from "../types";

interface Entity {
  id: number,
  examDesc: ExamDesc,
  modelScores: ModelScore[]
}

const Boards: React.FC = () => {
  const entities: Entity[] = [
    {
      id: 1,
      examDesc: {
        name: "Human's Last Exam",
        desc: "Challenging LLMs at the frontier of human knowledge"
      },
      modelScores: [
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
    },
    {
      id: 2,
      examDesc: {
        name: "MultiNRC",
        desc: "Multilingual Native Reasoning Evaluation Benchmark for LLMs"
      },
      modelScores: [
        {
          modelName: "gpt-5-2025-08-07",
          company: "OpenAI",
          rank: 1,
          range: {
            centralValue: 52.13,
            uncertainty: 3.01
          },
          isNew: true,
          alertMsg: ""
        },
        {
          modelName: "o3-pro-2025-06-10-high",
          company: "OpenAI",
          rank: 1,
          range: {
            centralValue: 49.00,
            uncertainty: 3.02
          },
          isNew: false,
          alertMsg: ""
        },
        {
          modelName: "o3-2025-04-16-high",
          company: "OpenAI",
          rank: 2,
          range: {
            centralValue: 45.50,
            uncertainty: 3.00
          },
          isNew: false,
          alertMsg: ""
        },
      ]
    },
    {
      id: 3,
      examDesc: {
        name: "MASK",
        desc: "Evaluate model honesty when pressured to lie"
      },
      modelScores: [
        {
          modelName: "claude-opus-4-1-20250805-thinking",
          company: "Anthropic",
          rank: 1,
          range: {
            centralValue: 94.20,
            uncertainty: 1.79
          },
          isNew: false,
          alertMsg: ""
        },
        {
          modelName: "gpt-oss-120b",
          company: "OpenAI",
          rank: 2,
          range: {
            centralValue: 92.00,
            uncertainty: 0.86
          },
          isNew: true,
          alertMsg: ""
        },
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {
        entities.map((entity, index) => (
          <LeaderBoard key={index} examDesc={entity.examDesc} modelScores={entity.modelScores} />
        ))
      }
    </div>
  )
}

export default Boards;