import testPosts from '../testPosts';

const post = (state = testPosts[0], action) => {
  switch(action.type) {
    case 'EDIT_DESCRIPTION':
      let newState = Object.assign({}, state);
      newState.description = action.description;
      return newState;
    default:
      return state;
  }
}

export default post;
