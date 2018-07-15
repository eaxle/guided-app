import { makeExecutableSchema } from 'graphql-tools';
import { v1 as neo4j } from 'neo4j-driver';

// Database schema
const typeDefs = `
    type User {
        id: String
        first_name: String
        last_name: String
    }

    type Query {
        usersByName(name: String): [User]
    }

    type Mutation {
        createUser(first_name: String, last_name: String): User
    }
`;

// Resolver functions for schema
const resolvers = {
    // Query is used for match data
    Query: {
    },

    // Mutation is used for create, update, and delete data
    Mutation: {
        // Create a user node in database
        createUser: (root, args, context) => {
            let session = context.driver.session();
            let node_query = "MERGE (id:UniqueId{name: 'User', str: 'u'}) ON CREATE SET id.count = 1 ON MATCH SET id.count = id.count + 1 WITH id.str + id.count AS uid " +
            "CREATE (user:User {id: uid, first_name: {first_name}, last_name: {last_name}})";
            let relation_query = "";
            let query = node_query + relation_query;
            return session.run(query, args);
        },
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