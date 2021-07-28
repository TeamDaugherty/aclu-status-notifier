const getComplaintsQuery = (args) => {
  const { id } = args;

  const params = {
    TableName: 'Complaints',
    FilterExpression: 'complaintID IN (:idvalue)',
    ExpressionAttributeValues: { ':idvalue': id }
  };

  return params;
};

export { getComplaintsQuery };
