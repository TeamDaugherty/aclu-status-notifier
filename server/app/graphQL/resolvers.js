/* eslint-disable no-unused-vars */
import * as complaintController from '../controllers/complaintController';

const resolvers = {
  Query: {
    Complaint: (object, args, context, info) =>
      complaintController.getComplaint(args, context),
    Statuses: (object, args, context, info) => {}
  },
  Mutation: {
    CreateComplaint: (object, args, context) =>
      complaintController.createComplaint(args, context),
    UpdateComplaint: (object, args, context) =>
      complaintController.updateComplaint(args, context)
  }
};

export default resolvers;
