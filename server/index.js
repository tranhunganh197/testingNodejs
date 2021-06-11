import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import connectDB from './config/db/connect.js';


// Connect DB
connectDB();

const app = express();
const PORT = process.env.port || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use(cors());


app.use('/posts',posts);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})