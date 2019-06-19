var AWS = require('aws-sdk');
var uuid = require('node-uuid');

AWS.config.accessKeyId = "XXX";
AWS.config.secretAccessKey = "XXX";

// Create an S3 client
var s3 = new AWS.S3();

// Create a bucket and upload something into it
var bucketName = 'aws-s3-sample-' + uuid.v4();
var keyName = 'hello_world.txt';

s3.createBucket({Bucket: bucketName}, function() {
    var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
    s3.putObject(params, function(err, data) {
        if (err)
        console.log(err)
        else
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
    });
});