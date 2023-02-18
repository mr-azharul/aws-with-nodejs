import express from "express";
import bodyParser from "body-parser";
import s3Routes from './src/routes/s3.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    next();
});

app.get("/", (req, res) => {
    res.send("Hello from AWS with NodeJS");
});

app.use('/api/s3', s3Routes);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});