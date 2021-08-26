import { mapToGraphQL } from './mappingUtil';
import * as queryUtil from './queryUtil';

const getComplaint = async (args, context) => {
  const params = queryUtil.getComplaintsQuery(args);
  const data = await context.docClient.scan(params).promise();
  return mapToGraphQL(data.Items);
};

const updateComplaint = (args, context) => {

  const { id, complaint } = args;
  console.log(id);
  console.log(complaint);



  let time = new Date().toLocaleDateString()
  // let complaintStatus = getComplaint(id, context).complaintStatus;
   let prevComplaintStatus = "p";


  const complaintUpdate = {
    updatedBy: complaint.emailAddress,
    statusTo: complaint.complaintStatus,
    statusFrom: prevComplaintStatus,
    dateUpdated: time

  }
  console.log(complaintUpdate);
  const params = queryUtil.getUpdateComplaintQuery(id,complaintUpdate);
  context.docClient.update(params, function(err, data) {
   if (err) console.log(err);
   else console.log(data);
  });
};

const CreateComplaint = async (args, context) => {
  const params = queryUtil.createComplaintQuery(args);
  await context.docClient.put(params).promise();
  return getComplaint({ id: args.complaint.id }, context);
};

export { getComplaint, updateComplaint, CreateComplaint };
