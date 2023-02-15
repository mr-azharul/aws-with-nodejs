import express from "express";
import s3Routes from './src/routes/s3.routes.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from AWS with NodeJS");
});

app.use('/api/s3', s3Routes);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});