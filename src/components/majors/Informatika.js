import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Informatika(props) {
  return (
    <Box sx={{
      margin: '16px',
      padding: '8px'
    }}>
    <Typography>Program studi yang cocok untuk anda (CF={props.cf}):</Typography>
      <Card sx={{
        padding: '20px'
      }}>
        <CardContent>
          <Box>
            <Grid item xs={8}>
              <Typography  variant='h3'>Informatika</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>Informatika merupakan sebuah ilmu yang mempelajari dasar-dasar dan teori Komputasi. Melalui program studi ini mahasiswa akan mempelajari bagaimana mengelola sebuah data dan informasi yang mereka dapat untuk dapat dijadikan sebuah sistem yang dapat bekerja secara otomatis dan dibantu dengan adanya teknologi sehingga tercipta sebuah alat yang dapat mempermudah kehidupan manusia.</Typography>
            </Grid>
            <Grid item xs={8}>
              <Button variant="contained">Detail</Button>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Informatika;
