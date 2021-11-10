import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function TeknikElektro(props) {
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
              <Typography  variant='h3'>Teknik Elektro</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>Teknik Elektro merupakan penerapan ilmu dan teknologi yang berkaitan dengan listrik dan pengaplikasiannya dalam pemenuhan kebutuhan hidup manusia sehari-hari. Mahasiswa akan mempelajari mengenai konsep, perancangan, pengembangan, hingga produksi perangkat listrik untuk menunjang kehidupan manusia terutama di era industri 4.0.</Typography>
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

export default TeknikElektro;
