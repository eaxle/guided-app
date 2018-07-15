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
      return newState0;
    default:
      return state;
  }
}

export default post;
