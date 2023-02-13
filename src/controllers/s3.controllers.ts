import AWS from "aws-sdk";
const S3 = new AWS.S3({
    region: "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET
});

export const getAllBucket = (req:any, res:any) => {
    const list = S3.listBuckets();
    res.send(list);
}