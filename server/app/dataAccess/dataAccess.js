import { mapToGraphQL } from './mappingUtil';
import * as queryUtil from './queryUtil';

const getComplaint = async (args, context) => {
  const params = queryUtil.getComplaintsQuery(args);
  const data = await context.docClient.scan(params).promise();
  return mapToGraphQL(data.Items);
};

const updateComplaint = async (args, context) => {

  const { id, complaint } = args;
  let time = new Date().toLocaleDateString()
  let prevComplaint = await getComplaint({"id":id}, context);

  const complaintUpdate = {
    updatedBy: complaint.emailAddress,
    statusTo: complaint.complaintStatus,
    statusFrom: prevComplaint.complaintStatus,
    dateUpdated: time
  }

  const params = queryUtil.getUpdateComplaintQuery(id,complaintUpdate);

  console.log("Updating the item...");

  context.docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
  });

};

const CreateComplaint = async (args, context) => {
  const params = queryUtil.createComplaintQuery(args);
  await context.docClient.put(params).promise();
  return getComplaint({ id: args.complaint.id }, context);
};

export { getComplaint, updateComplaint, CreateComplaint };
