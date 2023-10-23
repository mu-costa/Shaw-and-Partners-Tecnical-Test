import express from 'express';
import statusCodes from './utils/statusCode';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (_req, res) => {
  res.status(statusCodes.OK).send('API working');
});

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
