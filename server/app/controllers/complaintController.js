import * as dataAccess from '../dataAccess/dataAccess';

const getComplaints = (args, context) =>
  dataAccess.getComplaints(args, context);

const updateComplaint = (args, context) =>
  dataAccess.updateComplaint(args, context);

const createComplaint = (args, context) =>
  dataAccess.CreateComplaint(args, context);

export { getComplaints, updateComplaint, createComplaint };
