import { makeExecutableSchema } from 'graphql-tools';
import { v1 as neo4j } from 'neo4j-driver';

// Database schema
const typeDefs = `
    type User {
        name: String
        id: String
        first_name: String
        last_name: String
    }

    type Created_At {
        name: String
    }

    type Updated_At {
        name: String
    }

    type Personal_Account {
        name: String
    }

    type Profile {
        name: String
    }

    type Image {
        name: String
    }

    type Album {
        name: String
    }

    type Account_Status {
        name: String
        active: String
    }

    type Account_Login {
        name: String
    }

    type Account_Payment {
        name: String
    }

    type Login_Direct {
        name: String
    }

    type Email {
        name: String
        email: String
    }

    type Birth {
        name: String
        birth_date: String
    }

    type Phone {
        name: String
        phone: String
    }

    type Gender {
        name: String
        gender: String
    }

    type Password {
        name: String
        password: String
    }

    type Query {
        loginViaEmail(email: String, password: String): [User]
    }

    type Mutation {
        createUser(first_name: String, last_name: String, email: String, birth: String, phone: String, gender: String, password: String): User
        updateAccountStatus(id: String, active: String): Account_Status
    }
`;

// Resolver functions for schema
const resolvers = {
    // Query is used for match data
    Query: {
        // Login using email address and password
        loginViaEmail: (root, args, context) => {
            let session = context.driver.session();
            let query = "MATCH (:Email {email: {email}})--(login:Login_Direct), (:Password {password: {password}})--(login:Login_Direct), (login)--(ac_login:Account_Login), " +
            "(ac_login)--(p_ac:Personal_Account), (p_ac)--(user:User) RETURN user";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("user").properties})});
        },
    },

    // Mutation is used for create, update, and delete data
    Mutation: {
        // Create a user node in database
        createUser: (root, args, context) => {
            let session = context.driver.session();
            let node_query = "MERGE (id:UniqueId{name: 'User', str: 'u#'}) ON CREATE SET id.count = 1 ON MATCH SET id.count = id.count + 1 WITH id.str + id.count AS uid " +
            "CREATE (user:User {name: 'User', id: uid, first_name: {first_name}, last_name: {last_name}}), " + 
            "(profile:Profile {name: 'Profile'}), (personal_account:Personal_Account {name: 'Personal Account'}), " +
            "(account_status:Account_Status {name: 'Account Status', active: 'false'}), (account_login:Account_Login {name: 'Account Login'}), (login_direct:Login_Direct {name: 'Login Direct'}), " +
            "(email:Email {name: 'Email', email: {email}}), (password:Password {name: 'Password', password: {password}}), " +
            "(birth:Birth {name: 'Birth Date', birth_date: {birth}}), (phone:Phone {name: 'Phone Number', phone: {phone}}), (gender:Gender {name: 'Gender', phone: {gender}}), " +
            "(image:Image {name: 'Image'}), (album:Album {name: 'Album'}), " +
            "(created:Created_At {name: 'Create Date'}), (updated:Updated_At {name: 'Update Date'}), " + 
            "(account_payment:Account_Payment {name: 'Account Payment'})";
            let relation_query = "CREATE (user)-[:has]->(profile), (user)-[:has]->(personal_account), (user)-[:has]->(album), (user)-[:has]->(created), " +
            "(profile)-[:has]->(email), (profile)-[:has]->(birth), (profile)-[:has]->(phone), (profile)-[:has]->(gender), (profile)-[:has]->(image), (profile)-[:has]->(updated), " +
            "(personal_account)-[:has]->(account_login), (personal_account)-[:has]->(account_status), (personal_account)-[:has]->(account_payment), " +
            "(account_login)-[:has]->(login_direct), (login_direct)-[:has]->(email), (login_direct)-[:has]->(password)";
            let query = node_query + relation_query;
            session.run(query, args);                
        },

        // Updating account status to active or inactive
        updateAccountStatus: (root, args, context) => {
            let session = context.driver.session();
            let query = "MATCH (:User {id: {id}})--(p_ac:Personal_Account), (p_ac)--(ac_status:Account_Status) SET ac_status.active = {active}";
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
        driver = neo4j.driver(secrets.NEO4J_URI || "bolt://localhost:7687", neo4j.auth.basic(secrets.NEO4J_USER || "neo4j", secrets.NEO4J_PASSWORD || "neo4jpa$$"))
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