import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('welcome to the service');
});

export default app;
