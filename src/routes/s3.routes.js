import express from "express";
import S3 from './../controllers/s3.controllers.js';
const s3Routes = express.Router();

s3Routes.post("/bucket/create", S3.createNewBucket);
s3Routes.get("/bucket/list/fetch", S3.getAllBucket);
s3Routes.post("/bucket/file/upload", S3.uploadNewFile);
s3Routes.get("/bucket/file/list", S3.getAllFile);
s3Routes.delete("/bucket/delete", S3.deleteBucket);

export default { s3Routes }