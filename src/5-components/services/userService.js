import gql from "graphql-tag";
import {client} from "../../index";
import {Query} from "react-apollo";
import React from "react";

export const UPDATE_USER_NAME = gql`
    mutation update_user_name($user_id: String!,$first_name:String!,$last_name:String!,$preferred_name:String!) {
        update_user_name(user_id: user_id,first_name:$first_name,last_name:$last_name,preferred_name:$preferred_name) {
            value
        }
    }
`;

export const GET_USER_NAME = gql`
    query getUserNameById($user_id:String!){
        getUserNameById(user_id:$user_id) {
            first_name
            last_name
            preferred_name
        }
    }
`;

export const GET_USER_EMAIL = gql`
    query getUserEmailById($user_id:String!){
        getUserEmailById(user_id:$user_id) {
            email
        }
    }
`;
export const GET_USER_PHONE = gql`
    query getUserPhoneNumberById($user_id:String!){
        getUserPhoneNumberById(user_id:$user_id) {
            phone_number
        }
    }
`;
export const GET_USER_GENDER = gql`
    query getUserGenderById($user_id:String!){
        getUserGenderById(user_id:$user_id) {
            gender
        }
    }
`;
export const GET_USER_DOB = gql`
    query getUserDateOfBirthById($user_id:String!){
        getUserDateOfBirthById(user_id:$user_id) {
            year
            month
            day
        }
    }
`;

export const getClientName = () => client.query({
    query: GET_USER_NAME,
    variables: {user_id: document.cookie.split('id=')[1]}
});
/*
export const getUserEmail = ({user_id}) => (
    <Query query={GET_USER_EMAIL} variables={{user_id}} notifyOnNetworkStatusChange>
        {({loading, error, data, refetch, networkStatus}) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            if (networkStatus === 4) return "Refetching!";
            return (<span id="re_001" onClick={() => refetch()}> {data.getUserEmailById[0].email}</span>);
        }}
    </Query>
);*/
