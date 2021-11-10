import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import InferenceSystem from './components/InferenceSystem.js';
import Result from './components/Result.js'

let list_of_questions = [
  "Apakah anda suka matematika?",
  "Apakah sesuatu yang abstrak menarik?",
  "Apakah anda seseorang yang logis?",
  "Apakah anda senang melakukan sesuatu secara terurut?"
]

let list_of_response = [];

const handleResponse = (num, index) => {
  list_of_response[index] = num;
  //console.log(list_of_response);
}


function App() {
  return (
    <>
      <Header/>
      <InferenceSystem
        questions = {list_of_questions}
        responseHandler = {handleResponse}/>
      <Result
        responseList = {list_of_response}
      />
    </>
  );
}

export default App;
