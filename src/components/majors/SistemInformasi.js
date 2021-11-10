import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function SistemInformasi(props) {
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
              <Typography  variant='h3'>Sistem Informasi</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>Sistem Informasi merupakan gabungan dari ilmu teknologi informasi dan manajemen bisnis. Di mana pada program studi ini, mahasiswa akan mempelajari bagaimana menciptakan dan membangun sebuah sistem yang dapat digunakan oleh perusahaan dalam mengelola sebuah bisnis.</Typography>
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

export default SistemInformasi;
