import express from 'express';
import one from '../../../../modules/main-service/infra/http/routes/one';

export const api = express.Router();

api.get('/', (req, res) => {
  return res.json({ message: 'Hi there' });
});

api.use('/one', one);

export default api;
