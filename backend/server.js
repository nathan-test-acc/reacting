import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import apiRoutes from '../backend/routes/api.js';

configDotenv();

const app = express();
const port = process.env.PORT || 5000;

console.log('completely changed');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
