import { createReadStream } from "fs";
import S3Services from "../services/s3.services.js";

const getAllBucket = async (req, res) => {
    try {
        const list = await S3Services.fetchBucketList();
        return res.status(200).json({ data: list });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

const createNewBucket = async (req, res) => {
    try {
        const bucket = await S3Services.createBucket(req.body.name);
        return res.status(200).json({ data: bucket });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

const uploadNewFile = async (req, res) => {
    try {
        const { bucketName, fileName } = req.body;
        const fileStream = createReadStream(req.body.path);
        fileStream.on('error', (err) => {
            throw new Error(err.message);
        });

        const upload = await S3Services.uploadFile(bucketName, fileName, fileStream);
        return res.status(200).json({ data: upload });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

const getSingleFile = async (req, res) => {
    try {
        const { bucketName, fileName } = req.body;
        const files = await S3Services.fetchSingleFile(bucketName, fileName);
        return res.status(200).json({ data: files });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

const getAllFile = async (req, res) => {
    try {
        const files = await S3Services.fetchFileList(req.body.name);
        return res.status(200).json({ data: files });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

const deleteBucket = async (req, res) => {
    try {
        const bucket = await S3Services.deleteBucket(req.body.name);
        return res.status(200).json({ data: bucket });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

export default {
    getAllBucket,
    createNewBucket,
    uploadNewFile,
    getSingleFile,
    getAllFile,
    deleteBucket
}