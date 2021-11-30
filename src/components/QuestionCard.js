import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';

/*
Sangat yakin : 0.8-1
yakin : 0.6-0.8
netral : 0.4-0.6
kurang yakin: 0.2-0.4
tidak yakin : 0 - 0.2
*/

function QuestionCard(props) {

  const [index, setIndex] = useState(props.index);
  const [number, setNumber] = useState(0);
  const [certaintyString, setCertaintyString] = useState('Tidak yakin');

  // useEffect( () => {
  //   props.handleChange(0, index);
  // })

  const getCertaintyString = (number) => {
    if(number >= 0.8) return "Sangat yakin";
    if(number >= 0.6) return "Yakin";
    if(number >= 0.4) return "Netral";
    if(number >= 0.2) return "Kurang yakin";
    return "Tidak yakin";
  }


  return(
      <Box
        sx={{
          margin: '16px',
          padding: '8px'
        }}>
        <Card sx={{
          padding: '20px'
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">{props.question}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>Tidak yakin</Typography>
            </Grid>
            <Grid item xs={2}>
              <Slider defaultValue={0} onChange={(_, value) => {props.handleChange(value/100, index); setNumber(value/100); setCertaintyString(getCertaintyString(value/100))}}/>
            </Grid>
            <Grid item xs={0.2}>
              <Typography>Yakin</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Taraf keyakinan : {certaintyString} ({number})</Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
  );
}

export default QuestionCard;
