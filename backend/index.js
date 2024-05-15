import express from 'express';
import dotenv from 'dotenv';
import Connect_to_DB from './database/db.js';
import Router from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Router);

const Port = 8000;
app.listen(Port, () => console.log(`Server Running on port: ${Port}`));
const uname = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;
Connect_to_DB(uname, pass);
