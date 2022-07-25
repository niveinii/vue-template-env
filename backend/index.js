import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import data from './data/router.js'

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/data/',data)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Running on port: ${PORT}`))

