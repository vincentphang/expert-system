import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import ValueDetails from './ValueDetails';

function ContentText() {

  useEffect( () => {
    document.title = 'UMN FTI Major Recommendation System';
  })

  return(
    <Box sx={{
      margin: '16px',
      padding: '8px'
    }}>
      <Typography variant="h3">Sistem Perekomendasi Jurusan Kuliah FTI UMN</Typography>
      <Typography variant="h6">Silahkan menjawab pertanyaan-pertanyaan yang diberikan dibawah ini dengan menggeser slider yang disediakan</Typography>
      <ValueDetails/>
    </Box>
  );
}

export default ContentText;
