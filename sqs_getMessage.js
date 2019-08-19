const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

// Create an SQS service object
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});
const params = {
    QueueUrl: 'https://sqs.us-east-1.amazonaws.com/864437013740/sqs1',
    AttributeNames: [
        'All'

    ],
    MaxNumberOfMessages: '1000',
    MessageAttributeNames: [
        'ALL',
        /* more items */
    ]

};
sqs.receiveMessage(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});