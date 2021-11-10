import QuestionCard from './QuestionCard';
import React, { useState, useEffect } from 'react';

function InferenceSystem(props) {

  const [counter, setCounter] = useState(0);
  const [questions, setQuestions] = useState(props.questions)

  const handleChange = (num, index) => {
    props.responseHandler(num, index);
  }

  const getCounter = () => {
    setCounter(counter + 1);
    console.log(counter);
    return counter-1;
  }

  return (
      questions.map( (question, key) => {
        return <QuestionCard
                  index = {key}
                  handleChange = {handleChange}
                  question = {question}/>
      })
  );
}

export default InferenceSystem;
