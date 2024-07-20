import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { weather: null, error: null });
});

app.post('/weather', async (req, res) => {
  const city = req.body.city || 'London';
  const apiKey = process.env.API_KEY; 
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    res.render('index', { weather: data, error: null });
  } catch (error) {
    console.error('Failed to fetch weather data:', error.message);
    res.render('index', { weather: null, error: 'Unable to fetch weather data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
