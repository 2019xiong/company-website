import type { ExamResponse } from "../types"

const entity: ExamResponse[] = [
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
        modelName: "gpt-5-mini-2025-08-07",
        company: "OpenAI",
        rank: 2,
        range: {
          centralValue: 19.44,
          uncertainty: 1.55
        },
        isNew: true,
        alertMsg: ""
      },
      {
        modelName: "o3 (medium) (April 2025)",
        company: "OpenAI",
        rank: 2,
        range: {
          centralValue: 19.20,
          uncertainty: 1.54
        },
        isNew: false,
        alertMsg: ""
      },
      {
        modelName: "Gemini 2.5 Pro Experimental (March 2025)",
        company: "Google DeepMind",
        rank: 3,
        range: {
          centralValue: 18.16,
          uncertainty: 1.51
        },
        isNew: false,
        alertMsg: ""
      },
      {
        modelName: "o4-mini (high) (April 2025)",
        company: "OpenAI",
        rank: 3,
        range: {
          centralValue: 18.08,
          uncertainty: 1.51
        },
        isNew: false,
        alertMsg: ""
      },
      {
        modelName: "gpt-4-turbo-2025-08-06",
        company: "OpenAI",
        rank: 3,
        range: {
          centralValue: 17.80,
          uncertainty: 1.50
        },
        isNew: false,
        alertMsg: ""
      },
      {
        modelName: "o3 (base) (April 2025)",
        company: "OpenAI",
        rank: 9,
        range: {
          centralValue: 14.28,
          uncertainty: 1.37
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
      },
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
      {
        modelName: "claude-opus-4-1-20250805-thinking",
        company: "Anthropic",
        rank: 2,
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
  },
  {
    id: 4,
    examDesc: {
      name: "TruthfulQA",
      desc: "Assessing LLMs on their ability to avoid false answers"
    },
    modelScores: [
      {
        modelName: "gpt-5-2025-08-07",
        company: "OpenAI",
        rank: 1,
        range: {
          centralValue: 83.00,
          uncertainty: 2.50
        },
        isNew: true,
        alertMsg: ""
      },
      {
        modelName: "o3-pro-2025-06-10-high",
        company: "OpenAI",
        rank: 2,
        range: {
          centralValue: 79.50,
          uncertainty: 2.45
        },
        isNew: false,
        alertMsg: ""
      },
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
  },
  {
    id: 5,
    examDesc: {
      name: "MMLU",
      desc: "Massive Multitask Language Understanding"
    },
    modelScores: [
      {
        modelName: "gpt-5-2025-08-07",
        company: "OpenAI",
        rank: 1,
        range: {
          centralValue: 86.50,
          uncertainty: 1.20
        },
        isNew: true,
        alertMsg: ""
      },
      {
        modelName: "o3-pro-2025-06-10-high",
        company: "OpenAI",
        rank: 2,
        range: {
          centralValue: 82.30,
          uncertainty: 1.30
        },
        isNew: false,
        alertMsg: ""
      },
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
  },
  {
    id: 6,
    examDesc: {
      name: "HellaSwag",
      desc: "A large-scale dataset for commonsense reasoning"
    },
    modelScores: [
      {
        modelName: "gpt-5-2025-08-07",
        company: "OpenAI",
        rank: 1,
        range: {
          centralValue: 90.00,
          uncertainty: 1.00
        },
        isNew: true,
        alertMsg: ""
      },
      {
        modelName: "o3-pro-2025-06-10-high",
        company: "OpenAI",
        rank: 2,
        range: {
          centralValue: 85.50,
          uncertainty: 1.20
        },
        isNew: false,
        alertMsg: ""
      },
      {
        modelName: "gemini-2.5-pro-preview-06-05",
        company: "Google DeepMind",
        rank: 3,
        range: {
          centralValue: 83.00,
          uncertainty: 1.30
        },
        isNew: false,
        alertMsg: ""
      }
    ]
  },
  {
    id: 7,
    examDesc: {
      name: "BBQ",
      desc: "Benchmark for Biases in Question Answering"
    },
    modelScores: [
      {
        modelName: "gpt-5-2025-08-07",
        company: "OpenAI",
        rank: 1,
        range: {
          centralValue: 88.00,
          uncertainty: 1.50
        },
        isNew: true,
        alertMsg: ""
      },
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
  },
  {
    id: 8,
    examDesc: {
      name: "OpenBookQA",
      desc: "A dataset for open book question answering"
    },
    modelScores: [
      {
        modelName: "gpt-5-2025-08-07",
        company: "OpenAI",
        rank: 1,
        range: {
          centralValue: 78.00,
          uncertainty: 2.00
        },
        isNew: true,
        alertMsg: ""
      },
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
  },
  {
    id: 9,
    examDesc: {
      name: "WinoGrande",
      desc: "A large-scale dataset for pronoun resolution"
    },
    modelScores: [
      {
        modelName: "gpt-5-2025-08-07",
        company: "OpenAI",
        rank: 1,
        range: {
          centralValue: 85.00,
          uncertainty: 1.30
        },
        isNew: true,
        alertMsg: ""
      },
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
  },
  {
    id: 10,
    examDesc: {
      name: "LAMBADA",
      desc: "A dataset for testing the ability to understand long-range context"
    },
    modelScores: [
      {
        modelName: "gpt-5-2025-08-07",
        company: "OpenAI",
        rank: 1,
        range: {
          centralValue: 92.00,
          uncertainty: 0.90
        },
        isNew: true,
        alertMsg: ""
      },
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

export function fetchLeaderBoard() : Promise<ExamResponse[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(entity)
    }, 500);
  })
}
