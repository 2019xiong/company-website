export interface ExamDesc {
  name: string,
  desc: string
}

export interface Entity {
  modelName: string,
  company: string,
  rank: number,
  range: {
    centralValue: number,
    uncertainty: number
  },
  isNew: boolean,
  alertMsg: string
}