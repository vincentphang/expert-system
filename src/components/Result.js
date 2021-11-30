import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import Informatika from './majors/Informatika';
import SistemInformasi from './majors/SistemInformasi';
import TeknikElektro from './majors/TeknikElektro';
import TeknikFisika from './majors/TeknikFisika';
import TeknikKomputer from './majors/TeknikKomputer';

const measureOfBelief = (he, h) => {
  if (h === 1) return 1;
  return (Math.max(he, h) - h) / (1-h);
}

const measureOfDisbelief = (he, h) => {
  if (h === 0) return 1;
  return (Math.min(he, h) - h) / (-1*h);
}

const certaintyFactor = (mb, md) => {
  return (mb-md) / (1-Math.min(mb,md));
}

const concludeRules = (cf_1, cf_2) => {
  if (cf_1 > 0 && cf_2 > 0){
    return cf_1 + cf_2 * (1 + -cf_1);
  }
  if (cf_1 < 0 && cf_2 < 0){
    return cf_1 + cf_2 * (1 + cf_1);
  }
  return (cf_1 + cf_2) / (1 - Math.min(Math.abs(cf_1), Math.abs(cf_2)));
}

const if_multiply = (response) =>{
  let new_array = [];
  let CF = [0.6, 0.8, 0.5, 0.85];
  for(let i = 0; i <=3; i++){
    new_array.push(CF[i] * response[i]);
  }

  return new_array;
}

const si_multiply = (response) =>{
  let new_array = [];
  let CF = [0.55, 0.7, 0.7, 0.8];
  for(let i = 0; i <=3; i++){
    new_array.push(CF[i] * response[i]);
  }

  return new_array;
}

const te_multiply = (response) =>{
  let new_array = [];
  let CF = [0.7, 0.6, 0.8, 0.85];
  for(let i = 0; i <=3; i++){
    new_array.push(CF[i] * response[i]);
  }

  return new_array;
}

const tk_multiply = (response) =>{
  let new_array = [];
  let CF = [0.8, 0.65, 0.75, 0.6];
  for(let i = 0; i <=3; i++){
    new_array.push(CF[i] * response[i]);
  }

  return new_array;
}

const tf_multiply = (response) =>{
  let new_array = [];
  let CF = [0.6, 0.8, 0.7, 0.65];
  for(let i = 0; i <=3; i++){
    new_array.push(CF[i] * response[i]);
  }

  return new_array;
}

function Result(props) {

  const [response, setResponse] = useState(props.responseListIF);
  const [calculate, setCalculate] = useState(false);
  const [result, setResult] = useState(0);
  const [suggestion, setSuggestion] = useState('');
  const [highest, setHighest] = useState(0);

  const conclude = (response, major_string) => {
    while(response.length !== 1){
      let cf_1 = response.shift() || 0;
      let cf_2 = response.shift() || 0;
      let new_cf = concludeRules(cf_1, cf_2);
      response.unshift(new_cf);
    }
    if(response[0] > highest){
      setResult(response[0]);
      setSuggestion(major_string);
    }

    return response[0];
  }

  const handleCalculation = () => {
    let if_response = if_multiply(props.responseListIF);
    let si_response = si_multiply(props.responseListSI);
    let tk_response = tk_multiply(props.responseListTK);
    let te_response = te_multiply(props.responseListTE);
    let tf_response = tf_multiply(props.responseListTF);

    console.log("IF : " + conclude(if_response, "IF"));
    console.log("SI : " + conclude(si_response, "SI"));
    console.log("TK : " + conclude(tk_response, "TK"));
    console.log("TE : " + conclude(te_response, "TE"));
    console.log("TF : " + conclude(tf_response, "TF"));

    let highest_cf = 0;
    let major = '';
    if(conclude(if_response, "IF") > highest_cf){
      highest_cf = conclude(if_response, "IF");
      major = "IF"
    }

    if(conclude(si_response, "SI") > highest_cf){
      highest_cf = conclude(si_response, "SI");
      major = "SI"
    }

    if(conclude(tk_response, "TK") > highest_cf){
      highest_cf = conclude(tk_response, "TK");
      major = "TK"
    }

    if(conclude(te_response, "TE") > highest_cf){
      highest_cf = conclude(te_response, "TE");
      major = "TE"
    }

    if(conclude(tf_response, "TF") > highest_cf){
      highest_cf = conclude(tf_response, "TF");
      major = "TF"
    }

    console.log("Highest : " + highest_cf + "(" + major + ")");
    setHighest(highest_cf);
    setSuggestion(major);
    setCalculate(true);
  }

/*  const oldhandleCalculation = () => {
    let oldResponse = response;
    let tempResponse = response;
    setCalculate(true);
    console.log("Initial array : " + tempResponse);

    while(response.length != 1){
      console.log("Array on loop: " + tempResponse);
      let cf_1 = tempResponse.shift() || 0;
      let cf_2 = tempResponse.shift() || 0;
      let new_cf = concludeRules(cf_1, cf_2);
      tempResponse.unshift(new_cf);
    }

    console.log("Result: " + tempResponse);
    console.log("response: " + response);
    setResponse(oldResponse);
    setResult(tempResponse[0]);
  } */

  if(!calculate){
      return(
        <Box textAlign='center'>
          <Button variant="contained" onClick={handleCalculation}>SUBMIT</Button>
        </Box>
    );
  }

  if(calculate){
    if(suggestion === "IF"){
      return <Informatika cf={highest}/>
    }
    if(suggestion === "SI"){
      return <SistemInformasi cf={highest}/>
    }
    if(suggestion === "TK"){
      return <TeknikKomputer cf={highest}/>
    }
    if(suggestion === "TE"){
      return <TeknikElektro cf={highest}/>
    }
    if(suggestion === "TF"){
      return <TeknikFisika cf={highest}/>
    }
    setCalculate(false);
  }
}

export default Result;
