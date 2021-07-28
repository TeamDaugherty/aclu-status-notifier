import { merge } from 'object-mapper';

const mapToGraphQL = (records) => {
  const map = {
    complaintID: 'id',
    emailAddress: 'emailAddress',
    complaintStatus: 'status',
  };
  const mapped = merge(records, map);
  if (!Array.isArray(mapped)) {
    return [mapped];
  }

  return mapped;
};

const mapToDB = (records) => {
  //
  //
};

export { mapToGraphQL, mapToDB };
