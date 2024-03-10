# S3Bucke-Poc

``` git clone git@github.com:crysosancher/S3Bucke-Poc.git```  
### Update yourkeys 
```
 const s3 = new AWS.S3({
  accessKeyId:"write your access key here" ,
  secretAccessKey: "write your secret key here",
}); 
```
And the file to paths
``` 
//filePath is the path of the file in your local system
const filePath="your file path here"
const fileContent = fs.readFileSync(filePath);
const params = {
	Bucket: "myawstut",
	Key: "apple.jpg",
	Body: fileContent,
};
```
###  Run the code to uplaod to your bucket after 
``` 
cd S3Bucke-Poc
npm install
node index.js 
```
