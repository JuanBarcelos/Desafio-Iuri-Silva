import 'reflect-metadata';
import './database';
import express from 'express';
import { routes } from './routes';
import cors from 'cors';

const app = express();

const port  = process.env.PORT || 3001;


app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log("Server is Running..."));