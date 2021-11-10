import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function TeknikKomputer(props) {
  return (
    <Box sx={{
      margin: '16px',
      padding: '8px'
    }}>
    <Typography>Program studi yang cocok untuk anda (CF=0.4):</Typography>
      <Card sx={{
        padding: '20px'
      }}>
        <CardContent>
          <Box>
            <Grid item xs={8}>
              <Typography  variant='h3'>TeknikKomputer</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>Teknik komputer merupakan program studi yang mempelajari mengenai perancangan, pengembangan dan sistem -sistem berbasis komputer. Penggunaan teknologi komputer saat ini mulai diaplikasikan di banyak objek atau sering dikenal dengan istilah internet of things, misalkan saat ini telah hadir mobil yang dapat berjalan sendiri tanpa perlu disetir oleh pengemudinya, hal ini menjadi salah satu contoh bahwa penggunaan teknologi komputer telah diaplikasikan dalam objek transportasi. Tentunya tidak hanya di bidang itu saja, pemanfaatan teknologi komputer dapat diaplikasikan ke berbagai objek lain di sekitar kita.</Typography>
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

export default TeknikKomputer;
