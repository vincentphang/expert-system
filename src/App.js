import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import InferenceSystem from './components/InferenceSystem.js';
import Result from './components/Result.js'

let if_questions = [
  "Apakah anda suka matematika?",
  "Apakah sesuatu yang abstrak menarik?",
  "Apakah anda seseorang yang logis?",
  "Apakah anda senang melakukan sesuatu secara terurut?"
]

let if_response = [];

const if_handleResponse = (num, index) => {
  if_response[index] = num;
}

let si_questions = [
  "Pertanyaan SI",
  "Pertanyaan SI",
  "Pertanyaan SI",
  "Pertanyaan SI"
]

let si_response = [];

const si_handleResponse = (num, index) => {
  si_response[index] = num;
}

let tk_questions = [
  "Pertanyaan TK",
  "Pertanyaan TK",
  "Pertanyaan TK",
  "Pertanyaan TK"
]

let tk_response = [];

const tk_handleResponse = (num, index) => {
  tk_response[index] = num;
}

let te_questions = [
  "Pertanyaan TE",
  "Pertanyaan TE",
  "Pertanyaan TE",
  "Pertanyaan TE"
]

let te_response = [];

const te_handleResponse = (num, index) => {
  te_response[index] = num;
}

let tf_questions = [
  "Pertanyaan TF",
  "Pertanyaan TF",
  "Pertanyaan TF",
  "Pertanyaan TF"
]

let tf_response = [];

const tf_handleResponse = (num, index) => {
  tf_response[index] = num;
}


function App() {
  return (
    <>
      <Header/>
      <InferenceSystem
        questions = {if_questions}
        responseHandler = {if_handleResponse}/>
      <InferenceSystem
        questions = {si_questions}
        responseHandler = {si_handleResponse}/>
      <InferenceSystem
        questions = {tk_questions}
        responseHandler = {tk_handleResponse}/>
      <InferenceSystem
        questions = {te_questions}
        responseHandler = {te_handleResponse}/>
      <InferenceSystem
        questions = {tf_questions}
        responseHandler = {tf_handleResponse}/>
      <Result
        responseListIF = {if_response}
        responseListSI = {si_response}
        responseListTK = {tk_response}
        responseListTE = {te_response}
        responseListTF = {tf_response}
      />
    </>
  );
}

export default App;
