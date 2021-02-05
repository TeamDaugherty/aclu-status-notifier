import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    Complaints(
      id: [ID]
      statusId: [Int]
      emailAddress: [String]
      limit: Int
      offset: Int
    ): [Complaint]
    Statuses(id: [ID]): [Status]
  }

  type Mutation {
    CreateComplaint(complaint: NewComplaint!): Complaint
    UpdateComplaint(id: ID, complaint: UpdateComplaint!): Complaint
  }

  type Complaint {
    id: ID
    status: Status
    emailAddress: String
  }

  input NewComplaint {
    name: String!
    statusId: ID!
    emailAddress: String!
  }

  input UpdateComplaint {
    name: String
    statusId: ID
    emailAddress: String
  }

  type Status {
    id: ID
    name: String
    description: String
  }
`;

export default typeDefs;
