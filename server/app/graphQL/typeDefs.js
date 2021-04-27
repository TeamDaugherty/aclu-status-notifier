import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    Complaints(
      id: [String]
      status: [String]
      emailAddress: [String]
    ): [Complaint]
    Statuses: [String]
  }

  type Mutation {
    CreateComplaint(complaint: NewComplaint!): Complaint
    UpdateComplaint(id: ID!, complaint: UpdateComplaint!): Complaint
  }

  type Complaint {
    id: String
    status: String
    emailAddress: String
  }

  input NewComplaint {
    id: String!
    status: String!
    emailAddress: String!
  }

  input UpdateComplaint {
    status: String
    emailAddress: String
  }
`;

export default typeDefs;
