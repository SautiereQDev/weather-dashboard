import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import 'dotenv/config';
import bodyParser from 'body-parser'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json())
app.use(express.urlencoded())

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});