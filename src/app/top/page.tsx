type Question = {
  id: number;
  title: string;
  sentence: string;
  answer: string;
};
export type ApiResponse = {
  result: { questions: Question[] };
};

const Top = () => {
  const questions = fetch<ApiResponse>(
    "http://localhost:3000/api/questions"
  ).then((res) => res.json());

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <h1>問題</h1>
          <p>{question.title}</p>
          <p>{question.sentence}</p>
          <p>{question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Top;
