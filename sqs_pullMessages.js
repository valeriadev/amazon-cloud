require("dotenv").config();

const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.queueRegion, credentials: new AWS.Credentials(
        process.env.accessKeyId,
        process.env.secretAccessKey, process.env.sessionToken)
});


const sqs = new AWS.SQS({apiVersion: '2012-11-05'});
const params = {
    QueueUrl: process.env.queueUrl,
    AttributeNames: ['All'],
    MaxNumberOfMessages: '10',
    MessageAttributeNames: ['ALL']

};

sqs.receiveMessage(params, function (err, data) {
    if (err) console.log(err, err.stack);

    else console.log(data);
});