import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphQL/schema';

const PORT = 3000;

const app = express();

const server = new ApolloServer(schema);
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  // eslint-disable-next-line no-console
  console.log(`Server ready at http://localhost:3000/graphql`),
);
