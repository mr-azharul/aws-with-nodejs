import FS from "fs";
import * as S3Services from "../services/s3.services";

export const getAllBucket = (req: any, res: any) => {
    try {
        const list = S3Services.fetchBucketList();
        return res.status(200).json({ data: list });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

export const createNewBucket = (req: any, res: any) => {
    try {
        const bucket = S3Services.createBucket(req.body.name);
        return res.status(200).json({ data: bucket });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

export const uploadNewFile = (req: any, res: any) => {
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

export const getAllFile = (req: any, res: any) => {
    try {
        const files = S3Services.fetchFileList(req.body.name);
        return res.status(200).json({ data: files });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}

export const deleteBucket = (req: any, res: any) => {
    try {
        const bucket = S3Services.deleteBucket(req.body.name);
        return res.status(200).json({ data: bucket });
    } catch (err) {
        return res.status(500).json({ data: err });
    }
}