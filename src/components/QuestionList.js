import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, fakeState, setFakeState }) {
  console.log("From QuestionList", questions)

  const questionList = questions.map((question) => <QuestionItem question={question} key={question.id} fakeState={fakeState} setFakeState={setFakeState} />)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
