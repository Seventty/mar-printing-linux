import express from 'express';
import cors from 'cors';
import { allPrinters, printJob } from './lib/connection.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000', credentials: true,}));
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.post('/print', function(req, res) {
    console.log("Printing: ", req.body);
    //printJob(req.body.textToPrint);
});

app.get("/getPrinters", (req, res) => {
    res.json({ printers: allPrinters() });
    console.log("Printers getted");
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
