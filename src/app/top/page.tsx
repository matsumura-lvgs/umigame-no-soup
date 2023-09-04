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
      {questions.map((question: Question) => (
        <div key={question.id}>
          <h1>問題</h1>
          <p>{question.title}</p>
          <p>{question.sentence}</p>
          <p>{question.answer}</p>
        </div>
      ))}
    </div>
  )
}

export default Top
