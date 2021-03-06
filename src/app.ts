import express from 'express';
import 'reflect-metadata';
import './shared/container';
import 'dotenv/config';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(router);

export default app;
