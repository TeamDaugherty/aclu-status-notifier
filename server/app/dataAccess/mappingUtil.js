import { merge } from 'object-mapper';

const mapToGraphQL = (records) => {
  const map = {
    complaintID: 'id',
    emailAddress: 'emailAddress',
    complaintStatus: 'status',
    'complaintUpdated[].updatedBy': 'complaintUpdated[].updatedBy',
    'complaintUpdated[].statusTo': 'complaintUpdated[].statusTo',
    'complaintUpdated[].statusFrom': 'complaintUpdated[].statusFrom',
    'complaintUpdated[].dateUpdated': 'complaintUpdated[].dateUpdated'
  };
  return merge(records, map);
};

const mapToDB = (records) => {
  //
  //
};

export { mapToGraphQL, mapToDB };
