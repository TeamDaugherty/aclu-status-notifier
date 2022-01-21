/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComplaint = /* GraphQL */ `
  subscription OnCreateComplaint {
    onCreateComplaint {
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
export const onUpdateComplaint = /* GraphQL */ `
  subscription OnUpdateComplaint {
    onUpdateComplaint {
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
export const onDeleteComplaint = /* GraphQL */ `
  subscription OnDeleteComplaint {
    onDeleteComplaint {
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
export const onCreateComplaintUpdatedItem = /* GraphQL */ `
  subscription OnCreateComplaintUpdatedItem {
    onCreateComplaintUpdatedItem {
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
export const onUpdateComplaintUpdatedItem = /* GraphQL */ `
  subscription OnUpdateComplaintUpdatedItem {
    onUpdateComplaintUpdatedItem {
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
export const onDeleteComplaintUpdatedItem = /* GraphQL */ `
  subscription OnDeleteComplaintUpdatedItem {
    onDeleteComplaintUpdatedItem {
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
