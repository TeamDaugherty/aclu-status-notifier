import typeDefs from './typeDefs';
import resolvers from './resolvers';
import getContext from './context';

const schema = {
  typeDefs,
  resolvers,
  context: getContext(),
};

export default schema;
