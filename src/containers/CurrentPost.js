import { connect } from 'react-redux';
import { editDescription } from '../actions'
import PostDetail from '../screens/PostDetail';

const mapStateToProps = state => ({
  post: state.post
})

const mapDispatchToProps = dispatch => ({
  editDescription: description => dispatch(editDescription(description))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
