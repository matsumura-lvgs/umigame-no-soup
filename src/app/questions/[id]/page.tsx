type Props = {
  params: { id: string }
}
const Question = (props: Props) => {
  return <div>Question {props.params.id}</div>
}

export default Question
