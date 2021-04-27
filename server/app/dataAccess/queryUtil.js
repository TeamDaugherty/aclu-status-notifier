const getComplaintsQuery = (args) => {
  const { id, emailAddress } = args;

  const params = {
    TableName: 'Complaints',
  };

  if (id) {
    // params.KeyConditionExpression = 'complaintID = :id';
    // id.forEach((element) => {
    //   params.ExpressionAttributeValues = {
    //     ':id': element,
    //   };
    // });

    // var params = {
    //     TableName : "Users",
    //     FilterExpression : "username IN (:user1, :user2)",
    //     ExpressionAttributeValues : {
    //         ":user1" : "john",
    //         ":user2" : "mike"
    //     }
    // };

    const titleObject = {};
    let index = 0;
    id.forEach((value) => {
      // eslint-disable-next-line no-plusplus
      index++;
      const titleKey = `:idvalue${index}`;
      titleObject[titleKey.toString()] = value;
    });

    params.FilterExpression = `complaintID IN (${Object.keys(
      titleObject,
    ).toString()})`;
    params.ExpressionAttributeValues = titleObject;
  } else if (emailAddress) {
    params.keyConditions = {};
  } else {
    throw new Error('Please provide either Id or Email Address');
  }

  console.log(params);

  return params;
};

export { getComplaintsQuery };
