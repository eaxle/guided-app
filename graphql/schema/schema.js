import { makeExecutableSchema } from 'graphql-tools';
import { v1 as neo4j } from 'neo4j-driver';
import { neo4jgraphql } from 'neo4j-graphql-js';

// neo4j database schema
const typeDefs = `
    type User {
        name: String
    }

    type Query {
        userByName(name: String): [User]
    }

    type Mutation {
        createUser(name: String): User
    }
`;

// resolver functions for schema field
const resolvers = {
    Query: {
        userByName: function(object, params, ctx, resolveInfo) {
            return neo4jgraphql(object, params, ctx, resolveInfo, true);
        }
    },

    Mutation: {
        createUser: function(object, params, ctx, resolveInfo) {
            return neo4jgraphql(object, params, ctx, resolveInfo, true);
        }
    }
};

// generate schema and export as "schema"
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// export a function to get context
let driver;

export function context(headers, secrets) {
    if (!driver) {
        driver = neo4j.driver(secrets.NEO4J_URI || "bolt://localhost:7687", neo4j.auth.basic(secrets.NEO4J_USER || "neo4j", secrets.NEO4J_PASSWORD || "123456"))
    }
    return {
        driver
    }
};

// export a root value
export const rootValue = {};

// export a root function
export function rootFunction(hearder, secrets) {
    return {
        hearder,
        secrets
    }
};