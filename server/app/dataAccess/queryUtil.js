import { mapToDB } from './mappingUtil';

const getComplaintsQuery = (args) => {
  const { id } = args;

  const params = {
    TableName: 'Complaints',
    FilterExpression: 'complaintID IN (:idvalue)',
    ExpressionAttributeValues: { ':idvalue': id }
  };

  return params;
};

const createComplaintQuery = (args) => {
  const complaint = mapToDB(args.complaint);
  const params = {
    TableName: 'Complaints',
    Item: complaint
  };

  return params;
};

const getUpdateComplaintQuery = (args) => {
  const { id } = args;

  const params = {
    TableName: 'Complaints',
    Key: '',
    ConditionExpression: '',
    UpdateExpression: '',
    ExpressionAttributeValues: { ':idvalue': id }

  };

  return params;
};

export { getComplaintsQuery, createComplaintQuery, getUpdateComplaintQuery };
