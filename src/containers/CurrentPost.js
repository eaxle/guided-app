import { connect } from 'react-redux';
import { editDescription, editAttributes } from '../actions'
import PostDetail from '../screens/PostDetail';

const mapStateToProps = state => ({
  post: state.post
})

const mapDispatchToProps = dispatch => ({
  editDescription: description => dispatch(editDescription(description)),
  editAttributes: attribute => dispatch(editAttributes(attribute))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
