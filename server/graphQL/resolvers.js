export const resolvers = {
    Query: {
        Records: (object, args, context, info) =>
            {} ,
        Statuses: (object, args, context, info) =>
            {} 
    },
    Mutation: {
        CreateRecord: (object, args, context) =>
            {},
        UpdateRecord: (object, args, context) =>
            {},
        CreateStatus: (object, args, context) =>
            {},
        UpdateStatus: (object, args, context) =>
            {}
    },
    Record: {
        status: (object, args, context) => 
            {}
    }
  }