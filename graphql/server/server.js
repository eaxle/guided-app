import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import { schema, rootValue, context } from '../schema/schema';

// Initialize the server
const server = express();
const PORT = 3000;

if (typeof process.env.NEO4J_URI === 'undefined') {
    console.warn('WARNING: process.env.NEI4J_URI is not defined. Check README.md for more information')
}
if (typeof process.env.NEO4J_USER === 'undefined') {
    console.warn('WARNING: process.env.NEI4J_USER is not defined. Check README.md for more information')
}
if (typeof process.env.NEO4J_PASSWORD === 'undefined') {
    console.warn('WARNING: process.env.NEI4J_PASSWORD is not defined. Check README.md for more information')
}

server.use('/graphql', bodyParser.json(), graphqlExpress(request => ({
    schema,
    rootValue,
    context: context(request.headers, process.env)
})));

// Use graphiql to test Query and Mutation functions
server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
// Query Type test
// query {
//     usersByName(name: "") {
//         name
//     }
// }
// Mutation Type test
// mutation {
//     createUser(name: "") {
//         name
//     }
// }
  }));

server.listen(PORT, () => {
    console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`);
    console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`);
});