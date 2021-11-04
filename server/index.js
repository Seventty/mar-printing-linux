import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000', credentials: true,}));

app.post('/print', function(req, res) {
    console.log("Recibing post...");
    console.log(req.body);
});
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});