import { S3Client } from "@aws-sdk/client-s3";
const s3Client = new S3Client({
    region: "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET
});

export { s3Client }