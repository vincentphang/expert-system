import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import Informatika from './majors/Informatika';

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

const questions_certainty_factor = [0.5, 0.7, 0.9, 0.8];

function Result(props) {

  const [response, setResponse] = useState(props.responseList);
  const [calculate, setCalculate] = useState(false);
  const [result, setResult] = useState(0);

  const handleCalculation = () => {
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
  }

  if(!calculate){
      return(
        <Box textAlign='center'>
          <Button variant="contained" onClick={handleCalculation}>SUBMIT</Button>
        </Box>
    );
  }

  if(calculate){
    return (
      <Box textAlign='center'>
        <Informatika cf={result}/>
      </Box>
    );
  }
}

export default Result;
