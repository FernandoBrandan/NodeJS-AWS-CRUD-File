import { GetObjectCommand, PutObjectCommand, ListObjectsCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "./libs.js";

import "dotenv/config";

const get = async (req, res) => {
  const key = req.params.key;
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
  });
  const url = await getSignedUrl(s3Client, command);
  res.json(url);
};

const post = async (req, res) => {
  const key = req.params.key;
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: `uploads/${key}`,
    ContentType: "image/jpeg", // por parametro
  });
  const url = await getSignedUrl(s3Client, command);
  console.log(url); // utilizar put despues
  res.json(url);
};

const list = async (req, res) => {
  const command = new ListObjectsCommand({
    Bucket: process.env.S3_BUCKET,
    Key: `/`, 
  });
  const result = await s3Client.send(command)
  console.log(result.Contents); 

};

const remove = async (req, res) => {
  const key = req.params.key;
  const command = new DeleteObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key, 
  });
  await s3Client.send(command)
};

export { get, post, list, remove };
