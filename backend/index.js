import express from 'express';
import dotenv from 'dotenv';
import Connect_to_DB from './database/db.js';

dotenv.config();
const app = express();

const Port = 8000;
app.listen(Port, () => console.log(`Server Running on port: ${Port}`));
const uname = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;
Connect_to_DB(uname, pass);
