import { Question } from "@/app/type/Question"
import { NextResponse } from "next/server"

export async function GET() {
  const response: { result: Question[] } = {
    result: [
      {
        id: 1,
        title: "title1",
        overview: "overciew1",
        sentence: "sentence1",
        answer: "answer1",
      },
      {
        id: 2,
        title: "title2",
        overview: "overciew2",
        sentence: "sentence2",
        answer: "answer2",
      },
      {
        id: 3,
        title: "title3",
        overview: "overview3",
        sentence: "sentence3",
        answer: "answer3",
      },
    ],
  }

  return NextResponse.json(response)
}
