/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComplaint = /* GraphQL */ `
  query GetComplaint($id: ID!) {
    getComplaint(id: $id) {
      id
      complaintStatus
      emailAddress
      phoneNumber
      complaintAudit {
        id
        complaintId
        statusTo
        statusFrom
        updatedBy
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComplaints = /* GraphQL */ `
  query ListComplaints(
    $filter: ModelComplaintFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComplaints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        complaintStatus
        emailAddress
        phoneNumber
        complaintAudit {
          id
          complaintId
          statusTo
          statusFrom
          updatedBy
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComplaintAuditItem = /* GraphQL */ `
  query GetComplaintAuditItem($id: ID!) {
    getComplaintAuditItem(id: $id) {
      id
      complaintId
      statusTo
      statusFrom
      updatedBy
      createdAt
      updatedAt
    }
  }
`;
export const listComplaintAuditItems = /* GraphQL */ `
  query ListComplaintAuditItems(
    $filter: ModelComplaintAuditItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComplaintAuditItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        complaintId
        statusTo
        statusFrom
        updatedBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
