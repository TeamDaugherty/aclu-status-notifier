/* eslint-disable no-unused-vars */
const resolvers = {
  Query: {
    Complaints: (object, args, context, info) => [
      { id: 1 },
      { id: 2 },
    ],
    Statuses: (object, args, context, info) => {},
  },
  Mutation: {
    CreateComplaint: (object, args, context) => {},
    UpdateComplaint: (object, args, context) => {},
  },
  Complaint: {
    status: (object, args, context) => {},
  },
};

export default resolvers;
