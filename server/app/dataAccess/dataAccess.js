import * as queryUtil from './queryUtil';

const getComplaints = (args, context) => {
  const params = queryUtil.getComplaintsQuery(args);

  context.docClient.scan(params, (err, data) => {
    if (err) {
      console.error(
        'Unable to read item. Error JSON:',
        JSON.stringify(err, null, 2),
      );
      throw new Error(err);
    } else {
      console.log(
        'GetItem succeeded:',
        JSON.stringify(data, null, 2),
      );
      return [{ id: '2020-001' }, { id: '2020-002' }];
    }
  });
};

const updateComplaint = (args, context) => [
  { id: '2020-001' },
  { id: '2020-002' },
];

const CreateComplaint = (args, context) => [
  { id: '2020-001' },
  { id: '2020-002' },
];

export { getComplaints, updateComplaint, CreateComplaint };
