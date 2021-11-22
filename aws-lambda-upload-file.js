"use-strict";
const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
  region: "us-east-1",
  credentials: new AWS.SharedIniFileCredentials({ profile: "personal" }),
});

const s3 = new AWS.S3();

const getBucketList = async () => {
  try {
    const { Buckets } = await s3.listBuckets().promise();
    console.log(Buckets);
  } catch (err) {
    console.log(err);
  }
  return 0;
};
const BUCKET_NAME = "nodeapp-fileuplod-test-123";

const uploadFileToS3 = (filename) => {
  const fileContent = fs.readFileSync(filename);
  const params = {
    Bucket: BUCKET_NAME,
    Key: "",
    Body: fileContent,
  };
  s3.upload(params, (err, data) => {
    if (err) throw err;
    console.log(`file uploaded to ${data.Location}`);
  });
  return 0;
};

const getFileNameFromUrl = (url) => {
  if (url) {
    let filename = url.toString().match(/.*\/(.+?)\./);
    let filenameExt = url.toString().split(".").pop().trim();
    if (filename && filename.length > 1) return [filename[1], filenameExt];
  }
  return "";
};

getBucketList();

const createNewS3Bucket = () => {
  const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
      // Set your region here
      LocationConstraint: "ap-south-1",
    },
  };
  s3.createBucket(params, (err, data) => {
    if (err) console.log(err, err.stack);
    console.log(`Bucket created at ${data.Location}`);
  });
};
