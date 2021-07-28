import { merge } from 'object-mapper';

const mapToGraphQL = (records) => {
  const map = {
    complaintID: 'id',
    emailAddress: 'emailAddress',
    complaintStatus: 'status',
  };
  return merge(records, map);
};

const mapToDB = (records) => {
  //
  //
};

export { mapToGraphQL, mapToDB };
