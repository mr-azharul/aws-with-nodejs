const AWS = require("aws-sdk");

const S3 = new AWS.S3({
    region: "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET
});

// List of bucket
const fetchBucketList = () => {
    S3.listBuckets((err, data) => {
        if (err) {
            throw new Error(err.message);
        }

        return data.Buckets;
    });
}

// Create a new bucket
const createBucket = (bucketName) => {
    const params = {
        Bucket: bucketName
    }

    S3.createBucket(params, (err, data) => {
        if (err) {
            throw new Error(err.message);
        }

        return data.Location;
    });
}

// Upload a new file into bucket
const uploadFile = (bucketName, fileName, content) => {
    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: content
    }

    S3.upload(params, {}, (err, data) => {
        if (err) {
            throw new Error(err.message);
        }

        return data.Location;
    });
}

// List of objects of a bucket
const fetchFileList = (bucketName) => {
    const params = {
        Bucket: bucketName,
    }

    S3.listObjects(params, (err, data) => {
        if (err) {
            throw new Error(err.message);
        }

        return data;
    });
}

// Delete a bucket
const deleteBucket = (bucketName) => {
    const params = {
        Bucket: bucketName,
    }

    S3.deleteBucket(params, (err, data) => {
        if (err) {
            throw new Error(err.message);
        }

        return data;
    });
}

module.exports = {
    fetchBucketList,
    createBucket,
    uploadFile,
    fetchFileList,
    deleteBucket
}