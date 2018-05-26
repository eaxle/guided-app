import { makeExecutableSchema } from 'graphql-tools';
import { v1 as neo4j } from 'neo4j-driver';

// Database schema
const typeDefs = `
    type User {
        name: String
    }

    type Query {
        usersByName(name: String): [User]
    }

    type Mutation {
        createUser(name:String): User
    }
`;

// Resolver functions for schema
const resolvers = {
    // Query is used for match data
    Query: {
        // Fetch users by name
        usersByName: (root, args, context) => {
            let session = context.driver.session();
            let query = "MATCH (user:User {name:{name}}) RETURN user";
            return session.run(query, args)
                .then( result => { return result.records.map(record => { return record.get("user").properties})});
        }
    },

    // Mutation is used for create, update, and delete data
    Mutation: {
        // Create a new user
        createUser: (root, args, context) => {
            let session = context.driver.session();
            let query = "CREATE (:User {name:{name}})";
            session.run(query, args);
        }
    }

};

// Generate schema and export as "schema"
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// Export a function to get context
let driver;

export function context(headers, secrets) {
    if (!driver) {
        driver = neo4j.driver(secrets.NEO4J_URI || "bolt://localhost:7687", neo4j.auth.basic(secrets.NEO4J_USER || "neo4j", secrets.NEO4J_PASSWORD || "123456"))
    }
    return {
        driver
    }
};

// Export a root value
export const rootValue = {};

// Export a root function
export function rootFunction(hearder, secrets) {
    return {
        hearder,
        secrets
    }
};