export type Question = {
  id: number
  title: string
  overview: string
  sentence: string
  answer: string
}

export type QuestionApiResponse = {
  result: Question[]
}
