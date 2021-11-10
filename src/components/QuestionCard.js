import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';


function QuestionCard(props) {

  const [index, setIndex] = useState(props.index);


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
              <Slider onChange={(_, value) => props.handleChange(value/100, index)}/>
            </Grid>
            <Grid item xs={0.2}>
              <Typography>Yakin</Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
  );
}

export default QuestionCard;
