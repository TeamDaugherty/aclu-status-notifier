/* eslint-disable no-console */
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
});
const docClient = new AWS.DynamoDB.DocumentClient();
const table = 'Complaints';
const id = '2020-001';
const params = {
  TableName: table,
  Key: {
    complaintID: id
  }
};
docClient.get(params, (err, data) => {
  if (err) {
    console.error(
      'Unable to read item. Error JSON:',
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log('GetItem succeeded:', JSON.stringify(data, null, 2));
  }
});
