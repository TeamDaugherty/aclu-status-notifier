const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Complaints',
  KeySchema: [{ AttributeName: 'complaintID', KeyType: 'HASH' }],
  AttributeDefinitions: [
    { AttributeName: 'complaintID', AttributeType: 'S' },
    { AttributeName: 'emailAddress', AttributeType: 'S' }
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'byEmailAddress',
      KeySchema: [
        {
          AttributeName: 'emailAddress',
          KeyType: 'HASH'
        },
        {
          AttributeName: 'complaintID',
          KeyType: 'RANGE'
        }
      ],
      Projection: {
        ProjectionType: 'ALL'
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
      }
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  }
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error(
      'Unable to create table. Error JSON:',
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      'Created table. Table description JSON:',
      JSON.stringify(data, null, 2)
    );
  }
});
