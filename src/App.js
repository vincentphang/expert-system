import './App.css';
import Header from './components/Header.js';
import InferenceSystem from './components/InferenceSystem.js';
import Result from './components/Result.js'

let if_questions = [
  "Apakah anda suka matematika?",
  "Apakah sesuatu yang abstrak menarik?",
  "Apakah anda seseorang yang logis?",
  "Apakah anda tertarik dengan pembangunan suatu sistem informasi (mobile, website)?"
]

let if_response = [];

const if_handleResponse = (num, index) => {
  if_response[index] = num;
}

let si_questions = [
  "Apakah anda memiliki minat terhadap manajemen?",
  "Apakah anda tertarik pada bidang pengolahan data?",
  "Apakah anda tertarik menganalisis data?",
  "Apakah anda tertarik menata suatu sistem informasi?"
]

let si_response = [];

const si_handleResponse = (num, index) => {
  si_response[index] = num;
}

let tk_questions = [
  "Apakah anda tertarik untuk mengetahui arsitektur komputer?",
  "Apakah anda senang membongkar perangkat-perangkat elektronik?",
  "Apakah anda tertarik terhadap jaringan komputer?",
  "Apakah anda tertarik dengan pengembangan hardware komputer?"
]

let tk_response = [];

const tk_handleResponse = (num, index) => {
  tk_response[index] = num;
}

let te_questions = [
  "Apakah anda tertarik untuk mempelajari energi listrik?",
  "Apakah anda memiliki minat untuk mempelajari rangkaian-rangkaian listrik?",
  "Apakah anda memiliki minat untuk mempelajari aplikasi elektronika?",
  "Apakah anda memiliki minat untuk mempelajari aplikasi elektromagnet?"
]

let te_response = [];

const te_handleResponse = (num, index) => {
  te_response[index] = num;
}

let tf_questions = [
  "Apakah anda tertarik dengan alam semesta?",
  "Apakah anda menyukai perhitungan rumit?",
  "Apakah anda suka alat-alat pengukuran dan bekerja pada laboratorium yang memiliki alat tersebut?",
  "Jika anda penasaran dengan sesuatu yang dapat diukur atau suatu hal yang pasti namun belum terpenuhi, apakah anda akan mencoba dan menyelesaikannya?"
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
