import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  const [fakeState, setFakeState] = useState(false)

  const onFormAdd = (newData) => setQuestions(newData)
  
  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(data => {
      console.log("From useEffect", data)
      onFormAdd(data)
    })
  }, [fakeState])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm fakeState={fakeState} setFakeState={setFakeState} /> : <QuestionList questions={questions} fakeState={fakeState} setFakeState={setFakeState} />}
    </main>
  );
}

export default App;