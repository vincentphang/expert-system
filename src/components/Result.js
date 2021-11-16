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

    console.log(major_string + " : " + response[0]);

    if(response[0] > highest){
      setHighest(response[0]);
      setSuggestion(major_string);
    }
  }

  const handleCalculation = () => {
    let if_response = props.responseListIF;
    let si_response = props.responseListSI;
    let tk_response = props.responseListTK;
    let te_response = props.responseListTE;
    let tf_response = props.responseListTF;

    conclude(if_response, "IF");
    conclude(si_response, "SI");
    conclude(tk_response, "TK");
    conclude(te_response, "TE");
    conclude(tf_response, "TF");
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
      return <Informatika/>
    }
    if(suggestion === "SI"){
      return <SistemInformasi/>
    }
    if(suggestion === "TK"){
      return <TeknikKomputer/>
    }
    if(suggestion === "TE"){
      return <TeknikElektro/>
    }
    if(suggestion === "TF"){
      return <TeknikFisika/>
    }
    setCalculate(false);
  }
}

export default Result;
