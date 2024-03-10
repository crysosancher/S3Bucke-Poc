// Description: This file contains the code to upload a file to S3 bucket.
const AWS = require('aws-sdk');
// const fs = require('fs');
const s3 = new AWS.S3({
  accessKeyId:"write your access key here" ,
  secretAccessKey: "write your secret key here",
});
//filePath is the path of the file in your local system
const filePath="your file path here"
const fileContent = fs.readFileSync(filePath);
const params = {
	Bucket: "myawstut",
	Key: "apple.jpg",
	Body: fileContent,
};
s3.upload(params, function(err, data) {
	if (err) {
		throw err;
	}
	console.log(`File uploaded successfully. ${data.Location}`);
});