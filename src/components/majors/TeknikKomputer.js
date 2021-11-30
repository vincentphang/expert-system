import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import image from '../../images/komputer.png';

function TeknikKomputer(props) {
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
                            <Typography  variant='h3'>Teknik Komputer</Typography>
                          </Grid>
                          <Grid item xs={8}>
                          <Typography>Teknik komputer merupakan program studi yang mempelajari mengenai perancangan, pengembangan dan sistem -sistem berbasis komputer. Penggunaan teknologi komputer saat ini mulai diaplikasikan di banyak objek atau sering dikenal dengan istilah internet of things, misalkan saat ini telah hadir mobil yang dapat berjalan sendiri tanpa perlu disetir oleh pengemudinya, hal ini menjadi salah satu contoh bahwa penggunaan teknologi komputer telah diaplikasikan dalam objek transportasi. Tentunya tidak hanya di bidang itu saja, pemanfaatan teknologi komputer dapat diaplikasikan ke berbagai objek lain di sekitar kita.</Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <Button variant="contained" onClick={ () => {window.open("https://www.umn.ac.id/teknik-komputer/", "_blank")}}>Detail</Button>
                          </Grid>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={3}>
                          <img src={image} width='350px'></img>
                        </Grid>
                      </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default TeknikKomputer;
