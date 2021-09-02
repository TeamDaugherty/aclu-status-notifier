import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    Complaint(id: String): Complaint
    Statuses: [String]
  }

  type Mutation {
    CreateComplaint(complaint: NewComplaint!): Complaint
    UpdateComplaint(id: ID!, complaint: ComplaintUpdate!): Complaint
  }

  type Complaint {
    id: String
    complaintStatus: String
    emailAddress: String
    complaintUpdated: [ComplaintUpdatedItem]
  }

  type ComplaintUpdatedItem {
    updatedBy: String
    statusTo: String
    statusFrom: String
    dateUpdated: String
  }

  input NewComplaint {
    id: String!
    complaintStatus: String!
    emailAddress: String!
  }

  input ComplaintUpdate {
    complaintStatus: String
    emailAddress: String
  }
`;

export default typeDefs;
