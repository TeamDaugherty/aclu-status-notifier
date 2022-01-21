/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComplaint = /* GraphQL */ `
  mutation CreateComplaint(
    $input: CreateComplaintInput!
    $condition: ModelComplaintConditionInput
  ) {
    createComplaint(input: $input, condition: $condition) {
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
export const updateComplaint = /* GraphQL */ `
  mutation UpdateComplaint(
    $input: UpdateComplaintInput!
    $condition: ModelComplaintConditionInput
  ) {
    updateComplaint(input: $input, condition: $condition) {
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
export const deleteComplaint = /* GraphQL */ `
  mutation DeleteComplaint(
    $input: DeleteComplaintInput!
    $condition: ModelComplaintConditionInput
  ) {
    deleteComplaint(input: $input, condition: $condition) {
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
export const createComplaintUpdatedItem = /* GraphQL */ `
  mutation CreateComplaintUpdatedItem(
    $input: CreateComplaintUpdatedItemInput!
    $condition: ModelComplaintUpdatedItemConditionInput
  ) {
    createComplaintUpdatedItem(input: $input, condition: $condition) {
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
export const updateComplaintUpdatedItem = /* GraphQL */ `
  mutation UpdateComplaintUpdatedItem(
    $input: UpdateComplaintUpdatedItemInput!
    $condition: ModelComplaintUpdatedItemConditionInput
  ) {
    updateComplaintUpdatedItem(input: $input, condition: $condition) {
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
export const deleteComplaintUpdatedItem = /* GraphQL */ `
  mutation DeleteComplaintUpdatedItem(
    $input: DeleteComplaintUpdatedItemInput!
    $condition: ModelComplaintUpdatedItemConditionInput
  ) {
    deleteComplaintUpdatedItem(input: $input, condition: $condition) {
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
