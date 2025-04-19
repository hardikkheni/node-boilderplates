import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  console.warn('Hello World!');
  res.send('Hello World!');
});

export default app;
