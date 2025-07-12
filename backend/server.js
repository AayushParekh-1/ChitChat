import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'

import authRoutes from './Routes/authRoutes.js';
import messageRoutes from './Routes/messageRoutes.js';
import userRoutes from './Routes/userRoutes.js'

import { connectDb } from '../backend/db/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //This middleware is used to deal with the JSON data usually parsing data available in req.body!(the body content while hitting Post request!)
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/user', userRoutes);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`App is live at ${PORT}`);
    console.log(`The URL is http://localhost:${PORT}/`);
  });
});
