const AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1",
  credentials: new AWS.SharedIniFileCredentials({ profile: "personal" }),
});

const s3 = new AWS.S3();
const BUCKET_NAME = "nodeapp-fileuplod-test-123";

const upload = async () => {
  const params = {
    ACL: "public-read",
    Body: "Hello from Lambda",
    ContentType: "text/html",
    Bucket: BUCKET_NAME,
    Key: "upload-file-from-lambda.txt",
  };

  return await new Promise((resolve, reject) => {
    s3.putObject(params, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const main = async (event) => {
  console.log("Event: ", event);
  return upload();
};
exports.handler = main;
