
import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './Src/connection.js';
import signup from './Src/Routes/signup.js'
dotenv.config();

const app = express();

const port = process.env.PORT


app.use(express.json());

app.get('/', (req, res) =>{
    res.send("<h1>Hello world</h1>")
});

app.use('/api/v1', signup);

app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
    connectDb()
});