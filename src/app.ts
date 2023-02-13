import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from AWS with NodeJS and TypeScript");
});

app.use("/api/s3", require("./routes/s3.routes"));

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});