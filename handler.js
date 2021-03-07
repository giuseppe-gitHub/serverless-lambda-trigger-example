'use strict';

module.exports.apiGatewayTriggered = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.s3UploadTriggered = async (event)  => {
  var bucket = event.Records[0].s3.bucket.name;
  var fileName = event.Records[0].s3.object.key;
  const message = `A new File named: ${fileName} was uploaded to the bucket ${bucket}`;
  console.log(message);
  return {
    message
  };
};

module.exports.dynamoDBStreamTriggered = async (event) => {
  var key = JSON.stringify(event.Records[0].dynamodb.Keys.id);
  const message = `DynamoDb item was created with key ${key}`;
  console.log(message);
  return {
    message
  };
};
