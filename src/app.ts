import express from 'express';

const app = express();

app.use(express.json());

app.set('port', process.env.PORT || 5000);

app.use('/', (req, res) => {
  res.send('Hello there, this is root.');
});

export default app;
