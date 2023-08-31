import { NextResponse } from "next/server";

export type Question = {
  id: number;
  title: string;
  sentence: string;
  answer: string;
};

export type QuestionApiResponse = {
  result: Question[];
};

export async function GET() {
  const response: { result: Question[] } = {
    result: [
      {
        id: 1,
        title: "title1",
        sentence: "sentence1",
        answer: "answer1",
      },
      {
        id: 2,
        title: "title2",
        sentence: "sentence2",
        answer: "answer2",
      },
      {
        id: 3,
        title: "title3",
        sentence: "sentence3",
        answer: "answer3",
      },
    ],
  };

  return NextResponse.json(response);
}
