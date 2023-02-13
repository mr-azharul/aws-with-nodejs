import express from "express";
const router = express.Router();
import * as S3 from "./../controllers/s3.controllers";

router.get("/get/all", S3.getAllBucket);

module.exports = router;