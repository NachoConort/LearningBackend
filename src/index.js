import 'dotenv/config';
import { dirname, join } from 'path';
import express from 'express';
import morgan from 'morgan';
import router from './routes/index.routes.js';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT;
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.use(morgan('dev'));
app.use(router);
app.listen(PORT, () => console.log(`
${__dirname}
Listen on port ${PORT}`))