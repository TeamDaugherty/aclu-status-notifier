import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { schema } from './graphQL/schema'

const PORT = 3000;

const app = express();

const server = new ApolloServer(schema);
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:3000/graphql`)
)