import express from 'express';

const one = express.Router();

one.get('/', (req, res) => {
  return res.json({ message: 'Hi one' });
});

export default one;
