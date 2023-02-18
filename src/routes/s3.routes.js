import express from 'express';
import S3 from './../controllers/s3.controllers.js';
const router = express.Router();

router.post("/bucket/create", S3.createNewBucket);
router.get("/bucket/list/fetch", S3.getAllBucket);
router.post("/bucket/file/upload", S3.uploadNewFile);
router.post("/bucket/file/get", S3.getSingleFile);
router.get("/bucket/file/list", S3.getAllFile);
router.delete("/bucket/delete", S3.deleteBucket);

export default router;