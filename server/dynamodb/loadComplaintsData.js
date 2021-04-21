/* eslint-disable no-console */
const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000',
});

const docClient = new AWS.DynamoDB.DocumentClient();

console.log('Importing Complaints into DynamoDB. Please wait.');

const complaints = JSON.parse(
  fs.readFileSync('complaintsData.json', 'utf8'),
);

complaints.forEach((complaint) => {
  console.log(complaint);

  const params = {
    TableName: 'Complaints',
    Item: {
      complaintID: complaint.complaintID,
      complaintStatus: complaint.complaintStatus,
    },
  };

  docClient.put(params, (err, data) => {
    if (err) {
      console.error(
        'Unable to add Complaint',
        complaint.complaintID,
        '. Error JSON:',
        JSON.stringify(err, null, 2),
      );
    } else {
      console.log('PutItem succeeded:', complaint.complaintID);
    }
  });
});
