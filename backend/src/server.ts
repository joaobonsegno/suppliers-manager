import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import database from './config/database.json';
import requireDir from 'require-dir';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(database.url);

requireDir('./model');

app.use('/api', require('./routes'));

app.listen(3030, () => {
    console.log('Server is running on port 3030...');
});