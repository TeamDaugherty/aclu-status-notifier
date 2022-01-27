/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComplaint = /* GraphQL */ `
  query GetComplaint($id: ID!) {
    getComplaint(id: $id) {
      id
      complaintStatus
      emailAddress
      complaintUpdated {
        id
        updatedBy
        statusTo
        statusFrom
        dateUpdated
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
        complaintUpdated {
          id
          updatedBy
          statusTo
          statusFrom
          dateUpdated
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
export const getComplaintUpdatedItem = /* GraphQL */ `
  query GetComplaintUpdatedItem($id: ID!) {
    getComplaintUpdatedItem(id: $id) {
      id
      updatedBy
      statusTo
      statusFrom
      dateUpdated
      createdAt
      updatedAt
    }
  }
`;
export const listComplaintUpdatedItems = /* GraphQL */ `
  query ListComplaintUpdatedItems(
    $filter: ModelComplaintUpdatedItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComplaintUpdatedItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        updatedBy
        statusTo
        statusFrom
        dateUpdated
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
