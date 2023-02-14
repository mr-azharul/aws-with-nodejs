const FS = require("fs");
const S3Services = require("../services/s3.services");

const getAllBucket = (req, res) => {
    try {
        const list = S3Services.fetchBucketList();
        return res.status(200).json({ data: list });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

const createNewBucket = (req, res) => {
    try {
        const bucket = S3Services.createBucket(req.body.name);
        return res.status(200).json({ data: bucket });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

const uploadNewFile = (req, res) => {
    try {
        const { bucketName, fileName } = req.body;
        const fileStream = FS.createReadStream(req.body.path);
        fileStream.on('error', function (err) {
            throw new Error(err.message);
        });

        const upload = S3Services.uploadFile(bucketName, fileName, fileStream);
        return res.status(200).json({ data: upload });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

const getAllFile = (req, res) => {
    try {
        const files = S3Services.fetchFileList(req.body.name);
        return res.status(200).json({ data: files });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

const deleteBucket = (req, res) => {
    try {
        const bucket = S3Services.deleteBucket(req.body.name);
        return res.status(200).json({ data: bucket });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

module.exports = {
    getAllBucket,
    createNewBucket,
    uploadNewFile,
    getAllFile,
    deleteBucket
}