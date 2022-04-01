/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComplaint = /* GraphQL */ `
  subscription OnCreateComplaint {
    onCreateComplaint {
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
export const onUpdateComplaint = /* GraphQL */ `
  subscription OnUpdateComplaint {
    onUpdateComplaint {
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
export const onDeleteComplaint = /* GraphQL */ `
  subscription OnDeleteComplaint {
    onDeleteComplaint {
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
export const onCreateComplaintAuditItem = /* GraphQL */ `
  subscription OnCreateComplaintAuditItem {
    onCreateComplaintAuditItem {
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
export const onUpdateComplaintAuditItem = /* GraphQL */ `
  subscription OnUpdateComplaintAuditItem {
    onUpdateComplaintAuditItem {
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
export const onDeleteComplaintAuditItem = /* GraphQL */ `
  subscription OnDeleteComplaintAuditItem {
    onDeleteComplaintAuditItem {
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
