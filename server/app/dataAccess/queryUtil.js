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
  // const { id, complaintUpdate } = args;
  console.log("query");
  console.log(id);
  console.log(complaintUpdate);

  const params = {
    TableName:'Complaints',
    Key:{
        "complaintID": id
    },
    UpdateExpression: "set complaintStatus = :s, complaintUpdated = list_append(if_not_exists(#updateList, :empty_list), :my_value)",
    ExpressionAttributeValues:{
        ":my_value":{"L": [{"S": "test"}]},
        ":empty_list":{"L":[]} ,
        ":s":complaintUpdate.statusTo
    },
    ExpressionAttributeNames : {
        "#updateList" : "complaintUpdated"
    }
  };


  return params;
};

export { getComplaintsQuery, createComplaintQuery, getUpdateComplaintQuery };
