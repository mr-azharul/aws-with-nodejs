import AWS from "aws-sdk";
const S3 = new AWS.S3({
    region: "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET
});

// List of bucket
export const fetchBucketList = () => {
    S3.listBuckets((err, data) => {
        if (err) {
            throw new Error(err.message);
        }

        return data.Buckets;
    });
}

// Create a new bucket
export const createBucket = (bucketName: any) => {
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
export const uploadFile = (bucketName: any, fileName: any, content: any) => {
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
export const fetchFileList = (bucketName: any) => {
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
export const deleteBucket = (bucketName: any) => {
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