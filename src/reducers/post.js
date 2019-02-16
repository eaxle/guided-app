import testPosts from '../testPosts';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';


function simplequery() {
  const client = new ApolloClient({
    uri: 'http://45.32.189.215:3000/graphql'
  });

  client.query({
    query: gql`
    { userByName(user: \"Kai\") { name } }
  `,
  })
    .then(data => console.log(data))
    .catch(error => console.error(error))
}

const post = (state = testPosts[0], action) => {
  simplequery();
  switch(action.type) {
    case 'EDIT_DESCRIPTION':
      let newState = Object.assign({}, state);
      newState.description = action.description;
      return newState;
    case 'EDIT_ATTRIBUTES':
      let newState0 = Object.assign({}, state);
      newState0.title = action.attribute.title;
      newState0.country = action.attribute.country;
      newState0.duration = action.attribute.duration;
      newState0.timeUnit = action.attribute.timeUnit;
      newState0.price = action.attribute.price;
      newState0.currency = action.attribute.currency;
      newState0.guestNum = action.attribute.guestNum;
      newState0.guestMax = action.attribute.guestMax;
      return newState0;
    case 'EDIT_REQUIRED':
      let newState1 = Object.assign({}, state);
      newState1.required = action.required;
      return newState1;
    case 'EDIT_PROVIDED':
      let newState2 = Object.assign({}, state);
      newState2.provided = action.provided;
      return newState2;

      break;
      break;


    default:
      return state;
  }
}

export default post;
