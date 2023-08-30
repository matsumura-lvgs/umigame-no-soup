type Question = {
  id: number;
  title: string;
  sentence: string;
  answer: string;
};

const Top = () => {
  const questions: Question[] = [
    {
      id: 1,
      title: "title1",
      sentence: "sentence1",
      answer: "answer1",
    },
  ];

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.title}</p>
          <p>{question.sentence}</p>
          <p>{question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Top;
