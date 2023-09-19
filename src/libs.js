import { S3Client } from "@aws-sdk/client-s3";
import 'dotenv/config'

const REGION = process.env.REGION;
const s3Client = new S3Client({
    region: REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    },
});

export { s3Client };
