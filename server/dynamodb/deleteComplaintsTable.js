const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000',
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Complaints',
};

dynamodb.deleteTable(params, (err, data) => {
  if (err) {
    console.error(
      'Unable to delete table. Error JSON:',
      JSON.stringify(err, null, 2),
    );
  } else {
    console.log('Deleted table.');
  }
});
