import 'reflect-metadata';
import './database';
import express from 'express';
import { routes } from './routes';
import cors from 'cors';

const app = express();


app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use(routes);

app.listen(3001, () => console.log("Server is Running..."));