import { Question } from "@/app/type/Question";
import Image from "next/image";
import Link from "next/link";

type Props = {
  question: Question;
};
const QuestionCard = ({ question }: Props) => {
  return (
    <Link href={`/questions/${question.id}`}>
      <div className="bg-green-200 rounded-t-lg mt-4 ml-4 w-64 shadow">
        <div className="relative aspect-square">
          <Image
            // いずれS3からの取得に変更
            src={`/images/questionCard/test${question.id}.png`}
            alt=""
            fill={true}
            className="object-cover w-50px bg-black"
          />
        </div>
        <h2>{question.title}</h2>
        {/* 概要はなしでおすすめ度とかで良いかなぁ */}
        <h2>{question.overview}</h2>
      </div>
    </Link>
  );
};

export default QuestionCard;
