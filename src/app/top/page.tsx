import QuestionCard from "@/components/organisms/QuestionCard"
import { Question, QuestionApiResponse } from "../type/Question"

const Top = async () => {
  const response = await fetch("http://localhost:3000/api/questions")
  if (!response.ok) {
    console.error(response.status)
    throw new Error("Network response was not ok")
  }
  const data: QuestionApiResponse = await response.json()
  const questions = data.result

  return (
    <div>
      {/* 二列ずつ、レスポンシブデザインに */}
      {questions.map((question: Question) => (
        <div key={question.id}>
          <QuestionCard question={question} />
        </div>
      ))}
    </div>
  )
}

export default Top
