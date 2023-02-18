import { ListBucketsCommand, CreateBucketCommand, PutObjectCommand, GetObjectCommand, ListObjectsCommand, DeleteBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./../libs/s3client.js";

// List of bucket
const fetchBucketList = async () => {
    try {
        return await s3Client.send(new ListBucketsCommand({}));
    } catch (err) {
        throw new Error(err.message);
    }
}

// Create a new bucket
const createBucket = async (bucketName) => {
    try {
        const params = {
            Bucket: bucketName
        }

        return await s3Client.send(new CreateBucketCommand(params));
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
}

// Upload a new file into bucket
const uploadFile = async (bucketName, fileName, content) => {
    try {
        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: content
        }

        return await s3Client.send(new PutObjectCommand(params));
    } catch (err) {
        throw new Error(err.message);
    }
}

// Fetch single object of a bucket
const fetchSingleFile = async (bucketName, fileName) => {
    try {
        const params = {
            Bucket: bucketName,
            Key: fileName,
        }

        const file = await s3Client.send(new GetObjectCommand(params));
        return file.Body;
    } catch (err) {
        throw new Error(err.message);
    }
}

// List of objects of a bucket
const fetchFileList = async (bucketName) => {
    try {
        const params = {
            Bucket: bucketName,
        }

        return await s3Client.send(new ListObjectsCommand(params));
    } catch (err) {
        throw new Error(err.message);
    }
}

// Delete a bucket
const deleteBucket = async (bucketName) => {
    try {
        const params = {
            Bucket: bucketName,
        }

        return await s3Client.send(new DeleteBucketCommand(params));
    } catch (err) {
        throw new Error(err.message);
    }
}

export default {
    fetchBucketList,
    createBucket,
    uploadFile,
    fetchSingleFile,
    fetchFileList,
    deleteBucket
}