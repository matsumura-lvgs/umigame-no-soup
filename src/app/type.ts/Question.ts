export type Question = {
  id: number;
  title: string;
  sentence: string;
  answer: string;
};

export type QuestionApiResponse = {
  result: Question[];
};
