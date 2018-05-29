import { connect } from 'react-redux';
import PostDetail from '../screens/PostDetail';

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps)(PostDetail);
