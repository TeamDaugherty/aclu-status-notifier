const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000',
});

const getContext = () => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  return { docClient };
};

export default getContext;
