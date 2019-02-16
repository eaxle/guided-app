import { connect } from 'react-redux';
import { editDescription, editAttributes, editRequire,editProvided} from '../actions'
import PostDetail from '../screens/PostDetail';

const mapStateToProps = state => ({
  post: state.post
})

const mapDispatchToProps = dispatch => ({
  editDescription: description => dispatch(editDescription(description)),
  editAttributes: attribute => dispatch(editAttributes(attribute)),
  editRequire: required => dispatch(editRequire(required)),
  editProvided: provided =>dispatch(editProvided(provided)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
