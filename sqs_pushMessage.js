require("dotenv").config();
// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
// Set the region


AWS.config.update({
    region: process.env.queueRegion, credentials: new AWS.Credentials(
        process.env.accessKeyId,
        process.env.secretAccessKey, process.env.sessionToken)
});


// Create an SQS service object
let sqs = new AWS.SQS({apiVersion: '2012-11-05'});


let params = {
    DelaySeconds: 10,
    MessageAttributes: {
        "Title": {
            DataType: "String",
            StringValue: "The Whistler"
        },
        "Author": {
            DataType: "String",
            StringValue: "John Grisham"
        },
        "WeeksOn": {
            DataType: "Number",
            StringValue: "6"
        }
    },
    MessageBody: "Information about current NY Times fiction bestseller for week of 12/11/2016.",
    QueueUrl: process.env.queueUrl
};

function sendMessage(args) {
    sqs.sendMessage(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.MessageId);
        }
    });
}
