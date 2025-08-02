import path from 'path'
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './Routes/authRoutes.js';
import messageRoutes from './Routes/messageRoutes.js';
import userRoutes from './Routes/userRoutes.js'

import { app,server } from './socket/socket.js'
import { connectDb } from '../backend/db/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json()); //This middleware is used to deal with the JSON data usually parsing data available in req.body!(the body content while hitting Post request!)
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials:true
}));

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/user', userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")))
app.get('*',(req,res) =>{
  res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

connectDb().then(() => {
  server.listen(PORT, () => {
    console.log(`App is live at ${PORT}`);
    console.log(`The URL is http://localhost:${PORT}/`);
  });
});
