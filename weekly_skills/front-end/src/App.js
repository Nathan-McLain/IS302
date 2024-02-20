import React from "react"
import './App.css';

function App() {
  return (
    <>
      <BackEnd />
    </>
  );
}

function BackEnd() {
  let [questions, setQuestions] = React.useState([])
  React.useEffect(() => {
    fetch('https://lunar-azure-crowley.glitch.me/')
      .then(response => response.json())
      .then(data => setQuestions(data))
  }, [])

  return (
    <>
      {questions.map((questions) => {
        return (
          <>
          <h2>{questions.question}</h2>
          <p>{questions.correctAnswer}</p>
           </>
        )
      })}
    </>
  )
}

export default App;
