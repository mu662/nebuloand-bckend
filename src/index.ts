import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { authRoutes } from './routes/authRoutes';
import { errorHandler } from './helpers/errorHandler';
import { AppDataSource } from './config'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });


app.use('/auth', authRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
