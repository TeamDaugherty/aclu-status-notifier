const { gql } = require('apollo-server-express');

export const typeDefs = gql`
    type Query {
        Records(id: ID, name: String, statusId: Int, emailAddress: String, limit: Int, offset: Int): [Record]
        Statuses(id: ID): [Status]
    }
    

    type Mutation {
        CreateRecord(record: NewRecord!): Record
        UpdateRecord(id: ID, record: UpdateRecord!): Record
        CreateStatus(status: NewStatus!): Status
        UpdateStatus(id: ID!, status: UpdateStatus!): Status
    }
    

    type Record {
        id: ID
        name: String
        status: Status
        emailAddress: String
    }
    
    input NewRecord {
        name: String!
        statusId: ID!
        emailAddress: String!
    }
    
    input UpdateRecord {
        name: String
        statusId: ID
        emailAddress: String
    }
    
    type Status {
        id: ID
        name: String
        description: String
        emailNotificationBody: String
    }
    
    input NewStatus {
        name: String!
        description: String
        emailNotificationBody: String!
    }
    
    input UpdateStatus {
        name: String
        description: String
        emailNotificationBody: String
    }
`