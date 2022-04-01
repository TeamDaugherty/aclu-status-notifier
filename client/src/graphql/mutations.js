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
export const updateComplaint = /* GraphQL */ `
  mutation UpdateComplaint(
    $input: UpdateComplaintInput!
    $condition: ModelComplaintConditionInput
  ) {
    updateComplaint(input: $input, condition: $condition) {
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
export const deleteComplaint = /* GraphQL */ `
  mutation DeleteComplaint(
    $input: DeleteComplaintInput!
    $condition: ModelComplaintConditionInput
  ) {
    deleteComplaint(input: $input, condition: $condition) {
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
export const createComplaintAuditItem = /* GraphQL */ `
  mutation CreateComplaintAuditItem(
    $input: CreateComplaintAuditItemInput!
    $condition: ModelComplaintAuditItemConditionInput
  ) {
    createComplaintAuditItem(input: $input, condition: $condition) {
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
export const updateComplaintAuditItem = /* GraphQL */ `
  mutation UpdateComplaintAuditItem(
    $input: UpdateComplaintAuditItemInput!
    $condition: ModelComplaintAuditItemConditionInput
  ) {
    updateComplaintAuditItem(input: $input, condition: $condition) {
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
export const deleteComplaintAuditItem = /* GraphQL */ `
  mutation DeleteComplaintAuditItem(
    $input: DeleteComplaintAuditItemInput!
    $condition: ModelComplaintAuditItemConditionInput
  ) {
    deleteComplaintAuditItem(input: $input, condition: $condition) {
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
