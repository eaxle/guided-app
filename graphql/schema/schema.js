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

    type Active_Status {
        name: String
        value: String
    }

    type Log_Notes_Listing {
        name: String
    }

    type Log_Notes {
        name: String
        log: String
        date: String
    }

    type Use_Listing {
        name: String
    }

    type Do_Listing {
        name: String
    }

    type Stay_Listing {
        name: String
    }

    type User_Media {
        name: String
    }

    type Query {
        loginViaEmail(email: String, password: String): [User]
        activeUser(uid: String): [Active_Status]
        getUserFisrtNameById(uid: String): [First_Name]
        getUserLastNameById(uid: String): [Last_Name]
        getUserPreferNameById(uid: String): [Prefer_Name]
        getUserEmailById(uid: String): [Email]
        getUserPhoneCodeById(uid: String): [Country_Code]
        getUserPhoneNumberById(uid: String): [Phone_Number]
        getGenderById(uid: String): [Gender]
        getUserDOBYearById(uid: String): [Year]
        getUserDOBMonthById(uid: String): [Month]
        getUserDOBDayById(uid: String): [Day]
    }

    type Mutation {
        registrationViaEmail(create_date: String, update_date: String, email: String, f_name: String, l_name: String, p_name: String, dob_y: String, dob_m: String, dob_d: String, c_code: String, ph_num: String, gender: String, password: String): User
        updateUserEmail(uid: String, email: String): Email
        updateUserPhoneCode(uid: String, code: String): Country_Code
        updateUserPhoneNumber(uid: String, number: String): Phone_Number
        updateUserGender(uid: String, gender: String): Gender
        updateUserDOBYear(uid: String, year: String): Year
        updateUserDOBMonth(uid: String, month: String): Month
        updateUserDOBDay(uid: String, day: String): Day
        updateUserFirstName(uid: String, fname: String): First_Name
        updateUserLastName(uid: String, lname: String): Last_Name
        updateUserPreferName(uid: String, pname: String): Prefer_Name
        updateUserName(uid: String, fname: String, lname: String, pname: String): User_Name
    }
`;

// Resolver functions for schema
const resolvers = {
    // Query is used for match data
    Query: {
        // Login using email address
        loginViaEmail: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (u:User)--(:User_Account)--(:Login_Account)--(el:Email_Login), (el)--(:Email {value: {email}}), (el)--(:Password {value: {password}}) return u";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("u").properties})});
        },

        // Active user account
        activeUser: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (as:Active_Status)--(u:User {id:{uid}}) " + 
            "create(ul:Use_Listing {name: 'Use Listing'}), (sl:Stay_Listing {name: 'Stay Listing'}), (dl:Do_Listing {name: 'Do Listing'}), (um:User_Media {name: 'User Media'}) " + 
            "create (u)-[:has]->(ul), (u)-[:has]->(sl), (u)-[:has]->(dl), (u)-[:has]->(um) " +
            "set as.value = 1 return as";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("as").properties})});
        },

        // Get user first name, last name, prefer name by user id
        getUserFisrtNameById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (fn:First_Name)--(:User_Name)--(User_Profile)--(:User {id: {uid}}) return fn";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("fn").properties})});
        },

        getUserLastNameById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (ln:Last_Name)--(:User_Name)--(User_Profile)--(:User {id: {uid}}) return ln";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("ln").properties})});
        },

        getUserPreferNameById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (pn:Prefer_Name)--(:User_Name)--(User_Profile)--(:User {id: {uid}}) return pn";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("pn").properties})});
        },

        // Get user email address by user id
        getUserEmailById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (e:Email)--(:User_Profile)--(:User {id: {uid}}) return e";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("e").properties})});
        },

        // Get use phone number by user id
        getUserPhoneCodeById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (phcc:Country_Code)--(:Mobile_Number)--(:User_Profile)--(:User {id: {uid}}) return phcc";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("phcc").properties})});
        },

        getUserPhoneNumberById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (phn:Phone_Number)--(:Mobile_Number)--(:User_Profile)--(:User {id: {uid}}) return phn";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("phn").properties})});
        },        

        // Get user gender by user id
        getGenderById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (g:Gender)--(User_Profile)--(:User {id: {uid}}) return g";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("g").properties})});
        },

        // Get user DOB year, month, day by user id
        getUserDOBYearById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (y:Year)--(:Date_Of_Birth)--(:User_Profile)--(:User {id: {uid}}) return y";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("y").properties})});
        },

        getUserDOBMonthById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (m:Month)--(:Date_Of_Birth)--(:User_Profile)--(:User {id: {uid}}) return m";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("m").properties})});
        },

        getUserDOBDayById: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (d:Day)--(:Date_Of_Birth)--(:User_Profile)--(:User {id: {uid}}) return d";
            return session.run(query, args)
                .then(result => { return result.records.map(record => { return record.get("d").properties})});
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
            "create (u:User {name: 'User', id: uid}), (cd:Create_Date {name: 'Create Date', value: {create_date}}), (st:Active_Status {name: 'Active Status', value: 0}), " +
            // Generate user profile node and update date node
            "(up:User_Profile {name: 'User Profile'}), (ud:Update_Date {name: 'Update Date', value: {update_date}}), (lln:Log_Notes_Listing {name: 'Log Notes Listing'}), " +
            // Generate email node and user name node
            "(e:Email {name: 'Email', value: {email}}), (un:User_Name {name: 'User Name'}), (log:Log_Notes {name: 'Log', log: 'user is created', date: {create_date}}), " +
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
            "create (u)-[:has]->(cd), (u)-[:has]->(up), (u)-[:has]->(ua), (u)-[:following]->(u), (u)-[:has]->(st), " +
            // Generate relation to user account email login node
            "(ua)-[:has]->(la), (la)-[:has]->(el), (el)-[:has]->(p), (el)-[:has]->(e), (u)-[:has]->(lln), (lln)-[:has]->(log), " +
            // Generate relation to user profile node
            "(up)-[:has]->(e), (up)-[:has]->(ud), (up)-[:has]->(un), (up)-[:has]->(g), (up)-[:has]->(mb), (up)-[:has]->(dob), " +
            // Generate relation to user name node
            "(un)-[:has]->(fn), (un)-[:has]->(ln), (un)-[:has]->(pn), " +
            // Generate relation to mobile node
            "(mb)-[:has]->(cc), (mb)-[:has]->(phn), " +
            // Generate relation to dob node
            "(dob)-[:has]->(y), (dob)-[:has]->(m), (dob)-[:has]->(d)";
            let query = node_query + relation_query;
            session.run(query, args);                
        },

        // Update user email address
        updateUserEmail: (root, args, context) => {
            let session = context.driver.session();
            let query = 
            // Match email node to user id
            "match (e:Email)--(:User_Profile)--(:User {id: {uid}})" +
            // Update email value
            "set e.value = {email} return e.value";
            session.run(query, args);
        },

        // Update user phone number
        updateUserPhoneCode: (root, args, context) => {
            let session = context.driver.session();
            let query = 
            // Match phone code node to user id
            "match (phcc:Country_Code)--(:Mobile_Number)--(:User_Profile)--(:User {id: {uid}})" +
            // Update phone code
            "set phcc.value = {code} return phcc.value";
            session.run(query, args);
        },

        updateUserPhoneNumber: (root, args, context) => {
            let session = context.driver.session();
            let query = 
            // Match phone number to user id
            "match (phn:Phone_Number)--(:Mobile_Number)--(:User_Profile)--(:User {id: {uid}})" +
            // Update phone number
            "set phn.value = {number} return phn.value";
            session.run(query, args);
        },

        // Update user gender
        updateUserGender: (root, args, context) => {
            let session = context.driver.session();
            let query = 
            // Match gender to user id
            "match (g:Gender)--(User_Profile)--(:User {id: {uid}})" +
            // Update gender
            "set g.value = {gender} return g.value";
            session.run(query, args);
        },

        // Update user DOB year, month, day
        updateUserDOBYear: (root, args, context) => {
            let session = context.driver.session();
            let query = 
            // Match DOB year to user id
            "match (y:Year)--(:Date_Of_Birth)--(:User_Profile)--(:User {id: {uid}})" +
            // Update DOB year
            "set y.value = {year} return y.value";
            session.run(query, args);
        },

        updateUserDOBMonth: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (m:Month)--(:Date_Of_Birth)--(:User_Profile)--(:User {id: {uid}}) set m.value = {month} return m.value";
            session.run(query, args);
        },

        updateUserDOBDay: (root, args, context) => {
            let session = context.driver.session();
            let query = "match (d:Day)--(:Date_Of_Birth)--(:User_Profile)--(:User {id: {uid}}) set d.value = {day} return d.value";
            session.run(query, args);
        },

        // Update user name
        updateUserFirstName: (root, args, context) => {
            let session = context.driver.session();
            let query = 
            "match (fn:First_Name)--(:User_Name)--(User_Profile)--(:User {id: {uid}}) set fn.value = {fname} return fn.value";
            session.run(query, args);
        },

        updateUserLastName: (root, args, context) => {
            let session = context.driver.session();
            let query = 
            "match (ln:Last_Name)--(:User_Name)--(User_Profile)--(:User {id: {uid}}) set ln.value = {lname} return ln.value";
            session.run(query, args);
        },

        updateUserPreferName: (root, args, context) => {
            let session = context.driver.session();
            let query = 
            "match (pn:Prefer_Name)--(:User_Name)--(User_Profile)--(:User {id: {uid}}) set pn.value = {pname} return pn.value";
            session.run(query, args);
        },

        updateUserName: () => {
            let session = context.driver.session();
            let query = "match (fn:First_Name)--(:User_Name)--(User_Profile)--(:User {id: {uid}}), " +
            "(ln:Last_Name)--(:User_Name)--(User_Profile)--(:User {id: {uid}}), (pn:Prefer_Name)--(:User_Name)--(User_Profile)--(:User {id: {uid}}) " +
            "set fn.value = {fname}, ln.value = {lname}, pn.value = {pname} return fn.value, ln.value, pn.value";
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