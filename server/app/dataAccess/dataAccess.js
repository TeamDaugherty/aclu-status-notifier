import { mapToGraphQL } from './mappingUtil';
import * as queryUtil from './queryUtil';

const getComplaint = async (args, context) => {
  const params = queryUtil.getComplaintsQuery(args);
  const data = await context.docClient.scan(params).promise();
  return mapToGraphQL(data.Items);
};

const updateComplaint = (args, context) => [
  const params = queryUtil.getUpdateComplaintQuery(args);
  context.docClient.update(params, function(err, data) {
   if (err) console.log(err);
   else console.log(data);
  });
];

const CreateComplaint = async (args, context) => {
  const params = queryUtil.createComplaintQuery(args);
  await context.docClient.put(params).promise();
  return getComplaint({ id: args.complaint.id }, context);
};

export { getComplaint, updateComplaint, CreateComplaint };
