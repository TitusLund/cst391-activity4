// We need to import express so that we have it
import express from "express";
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';

import logger from './middleware/logger.middleware';

import cors from 'cors';

import helmet from 'helmet';

import dotenv from "dotenv"

import { Request, Response } from 'express';


// Create a new app
const app = express();
// Define the port that the web application will run on
const port = 5000;
app.use(cors());


app.use(express.json());


app.use(helmet());

app.use(express.urlencoded({ extended : true }));

dotenv.config();

app.use("/", [albumsRouter, artistsRouter]);
// The contents of this method are called when a connection on the port happens. 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)  
});

if(process.env.NODE_ENV == 'development') {
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

app.get('/', (req: Request, res: Response) =>
{
    res.send('<h1>Welcome to the Music API<h1/>');
});