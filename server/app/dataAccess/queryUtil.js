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

const getUpdateComplaintQuery = (id, complaintUpdate) => {

  const params = {
    TableName:'Complaints',
    Key:{
        "complaintID": id
    },
    UpdateExpression: "set complaintStatus = :s, #updateList = list_append(if_not_exists(#updateList, :empty_list), :cu)",
    ExpressionAttributeValues:{
        ":cu": [complaintUpdate],
        ':empty_list': [],
        ":s":complaintUpdate.statusTo
    },
    ExpressionAttributeNames : {
        "#updateList" : "complaintUpdated"
    },
    ReturnValues:"ALL_NEW"
  };

  return params;
};

export { getComplaintsQuery, createComplaintQuery, getUpdateComplaintQuery };
