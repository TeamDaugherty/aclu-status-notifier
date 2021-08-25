import * as dataAccess from '../dataAccess/dataAccess';

const getComplaint = (args, context) =>
  dataAccess.getComplaint(args, context);

const updateComplaint = (args, context) =>
  dataAccess.updateComplaint(args, context);

const createComplaint = (args, context) =>
  dataAccess.CreateComplaint(args, context);

export { getComplaint, updateComplaint, createComplaint };
