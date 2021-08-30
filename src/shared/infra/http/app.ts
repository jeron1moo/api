import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import api from './api/api';

dotenv.config();

const port = process.env.PORT || 5000;
const origin = {
  origin: '*',
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(origin));
app.use(helmet());

app.use('/api', api);

app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`);
});
