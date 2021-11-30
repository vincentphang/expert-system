import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DetailTable from './DetailTable';

export default function ValueDetails() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Petunjuk pengerjaan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Terdapat 20 soal yang akan anda jawab, tiap soal memiliki sebuah slider yang memiliki nilai 0-1 dengan detail sebagai berikut
          </Typography>
          <DetailTable/>
          <Typography>
            Tiap soal akan menghitung bobot keyakinan anda ke salah satu jurusan.
          </Typography>
          <Typography>
            Hasil akan dapat dilihat setelah anda menekan tombol submit di akhir halaman
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
