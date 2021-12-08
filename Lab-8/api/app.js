import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import routes from './routes/index.js';
import models from './models/index.js';


const app = express();


mongoose.connect('mongodb://localhost:27017/contactsdb');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());

routes(app);

export default app.use;

