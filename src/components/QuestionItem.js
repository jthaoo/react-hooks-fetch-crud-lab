import React from "react";

function QuestionItem({ question, fakeState, setFakeState }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const deleteFunction = (e) => {
    console.log("deleteFunction fired!", e, e.target.id)
    fetch(`http://localhost:4000/questions/${e.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
  })
    setFakeState(!fakeState)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button id={id} onClick={deleteFunction}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;