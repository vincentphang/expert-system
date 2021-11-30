import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import image from '../../images/sistemInformasi.png';

function SistemInformasi(props) {
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
                            <Typography  variant='h3'>Sistem informasi</Typography>
                          </Grid>
                          <Grid item xs={8}>
                          <Typography>Sistem Informasi merupakan gabungan dari ilmu teknologi informasi dan manajemen bisnis. Di mana pada program studi ini, mahasiswa akan mempelajari bagaimana menciptakan dan membangun sebuah sistem yang dapat digunakan oleh perusahaan dalam mengelola sebuah bisnis.</Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <Button variant="contained" onClick={ () => {window.open("https://www.umn.ac.id/sistem-informasi/", "_blank")}}>Detail</Button>
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

export default SistemInformasi;
