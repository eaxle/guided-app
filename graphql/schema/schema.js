import { makeExecutableSchema } from 'graphql-tools';
import { v1 as neo4j } from 'neo4j-driver';

// Database schema
const typeDefs = `
    type User {
        name: String
        id: String
    }

    type Create_Date {
        name: String
        value: String
    }

    type User_Profile {
        name: String
    }

    type Update_Date {
        name: String
        value: String
    }

    type Email {
        name: String
        value: String
    }

    type User_Name {
        name: String
    }

    type First_Name {
        name: String
        value: String
    }

    type Last_Name {
        name: String
        value: String
    }

    type Prefer_Name {
        name: String
        value: String
    }

    type Date_Of_Birth {
        name: String
    }

    type Year {
        name: String
        value: String
    }

    type Month {
        name: String
        value: String
    }

    type Day {
        name: String
        value: String
    }

    type Mobile_Number {
        name: String
    }

    type Country_Code {
        name: String
        value: String
    }

    type Phone_Number {
        name: String
        value: String
    }

    type Gender {
        name: String
        value: String
    }

    type User_Account {
        name: String
    }

    type Login_Account {
        name: String
    }

    type Email_Login {
        name: String
    }

    type Password {
        name: String
        value: String
    }

    type Query {
        loginViaEmail(email: String, password: String): [User]
        getUserFisrtNameById(uid: String): [First_Name]
        getUserLastNameById(uid: String): [Last_Name]
        getUserPreferNameById(uid: String): [Prefer_Name]
    }

    type Mutation {
        registrationViaEmail(create_date: String, update_date: String, email: String, f_name: String, l_name: String, p_name: String, dob_y: String, dob_m: String, dob_d: String, c_code: String, ph_num: String, gender: String, password: String): User
    }
`;

// Resolver functions for schema
const resolvers = {
    // Query is used for match data
    Query: {
        // Login using email address and password
        loginViaEmail: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (u:User)--(:User_Account)--(:Login_Account)--(el:Email_Login), (el)--(:Email {value: {email}}), (el)--(:Password {value: {password}}) return u";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("u").properties})});
        },

        // Get user first name by user id
        getUserFisrtNameById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (fn:First_Name)--(:User_Name)--(User_Profile)--(:User {id: {uid}}) return fn";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("fn").properties})});
        },

        // Get user last name by user id
        getUserLastNameById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (ln:Last_Name)--(:User_Name)--(User_Profile)--(:User {id: {uid}}) return ln";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("ln").properties})});
        },

        // Get user prefer name by user id
        getUserPreferNameById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (pn:Prefer_Name)--(:User_Name)--(User_Profile)--(:User {id: {uid}}) return pn";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("pn").properties})});
        }
    },

    // Mutation is used for create, update, and delete data
    Mutation: {
        // Create a user node in database
        registrationViaEmail: (root, args, context) => {
            let session = context.driver.session();
            let node_query = 
            // Generate unique user id
            "merge (id:UniqueId{name: 'User', str: 'u#'}) on create set id.count = 1 on match set id.count = id.count + 1 with id.str + id.count as uid " +
            // Generate user node and create date node 
            "create (u:User {name: 'User', id: uid}), (cd:Create_Date {name: 'Create Date', value: {create_date}}), " +
            // Generate user profile node and update date node
            "(up:User_Profile {name: 'User Profile'}), (ud:Update_Date {name: 'Update Date', value: {update_date}}), " +
            // Generate email node and user name node
            "(e:Email {name: 'Email', value: {email}}), (un:User_Name {name: 'User Name'}), " +
            // Generate name details node
            "(fn:First_Name {name: 'First Name', value: {f_name}}), (ln:Last_Name {name: 'Last Name', value: {l_name}}), (pn:Prefer_Name {name: 'Prefer Name', value: {p_name}}), " +
            // Generate dob nodes
            "(dob:Date_Of_Birth {name: 'DOB'}), (y:Year {name: 'Year', value: {dob_y}}), (m:Month {name: 'Month', value: {dob_m}}), (d:Day {name: 'Day', value: {dob_d}}), " +
            // Generate mobile number nodes
            "(mb:Mobile_Number {name: 'Mobile Number'}), (cc:Country_Code {name: 'Country Code', value: {c_code}}), (phn:Phone_Number {name: 'Phone Number', value: {ph_num}}), " +
            // Generate gender node
            "(g:Gender {name: 'Gender', value: {gender}}), " +
            // Generate password node
            "(ua:User_Account {name: 'User Account'}), (la:Login_Account {name: 'Login Account'}), (el:Email_Login {name: 'Email Login'}), (p:Password {name: 'Password', value: {password}})";
            let relation_query = 
            // Generate relation to user node
            "create (u)-[:has]->(cd), (u)-[:has]->(up), (u)-[:has]->(ua), " +
            // Generate relation to user account email login node
            "(ua)-[:has]->(la), (la)-[:has]->(el), (el)-[:has]->(p), (el)-[:has]->(e), " +
            // Generate relation to user profile node
            "(u)-[:has]->(up), (up)-[:has]->(e), (up)-[:has]->(ud), (up)-[:has]->(un), (up)-[:has]->(g), (up)-[:has]->(mb), (up)-[:has]->(dob), " +
            // Generate relation to user name node
            "(un)-[:has]->(fn), (un)-[:has]->(ln), (un)-[:has]->(pn), " +
            // Generate relation to mobile node
            "(mb)-[:has]->(cc), (mb)-[:has]->(phn), " +
            // Generate relation to dob node
            "(dob)-[:has]->(y), (dob)-[:has]->(m), (dob)-[:has]->(d)";
            let query = node_query + relation_query;
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