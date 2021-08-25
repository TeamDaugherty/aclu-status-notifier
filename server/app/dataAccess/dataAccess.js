import { mapToGraphQL } from './mappingUtil';
import * as queryUtil from './queryUtil';

const getComplaint = async (args, context) => {
  const params = queryUtil.getComplaintsQuery(args);
  const data = await context.docClient.scan(params).promise();
  return mapToGraphQL(data.Items);
};

const updateComplaint = (args, context) => [
  { id: '2020-001' },
  { id: '2020-002' }
];

const CreateComplaint = async (args, context) => {
  const params = queryUtil.createComplaintQuery(args);
  await context.docClient.put(params).promise();
  return getComplaint({ id: args.complaint.id }, context);
};

export { getComplaint, updateComplaint, CreateComplaint };
