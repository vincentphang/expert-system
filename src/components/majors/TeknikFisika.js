import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import image from '../../images/fisika.jpg'

function TeknikFisika(props) {
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
            <Grid container>
              <Grid item xs={8}>
                <Grid item xs={8}>
                  <Typography  variant='h3'>Teknik Fisika</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography>Teknik Fisika merupakan ilmu keteknikan yang dipadukan dengan ilmu-ilmu dasar seperti matematika, fisika, dan kimia. Melalui program studi ini mahasiswa akan mempelajari mengenai penerapan ilmu fisika dalam menggunakan dan memanfaatkan energi di kehidupan sehari hari. Misalkan sebagai contoh memanfaatkan prinsip-prinsip fisika untuk membangun sebuah gedung yang hemat energi dan ramah lingkungan dengan menginstalasi solar panel di atas atap. Dalam hal ini Teknik Fisika UMN hadir menjadi wadah bagi mahasiswa untuk mengembangan penerapan ilmu fisika dalam penggunaan energi guna menghadapi industri masa depan.</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Button variant="contained" onClick={ () => {window.open("https://www.umn.ac.id/teknik-fisika/", "_blank")}}>Detail</Button>
                </Grid>
              </Grid>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={3}>
                <img src={image} width='300px'></img>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default TeknikFisika;
