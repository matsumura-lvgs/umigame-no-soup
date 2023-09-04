import { Question } from "@/app/type/Question"
import Image from "next/image"
import Link from "next/link"

type Props = {
  question: Question
}
const QuestionCard = ({ question }: Props) => {
  return (
    <div className="bg-green-200 w-80 h-80 rounded-t-lg mt-4 ml-4 shadow">
      <Link href={`/questions/${question.id}`}>
        <Image
          // いずれS3からの取得に変更
          src={`/images/questionCard/test${question.id}.png`}
          alt=""
          width={100}
          height={100}
        />
      </Link>
      <div>
        <h2>{question.title}</h2>
        {/* 概要はなしでおすすめ度とかで良いかなぁ */}
        <h2>{question.overview}</h2>
      </div>
    </div>
  )
}

export default QuestionCard
