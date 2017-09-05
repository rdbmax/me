import { connect } from 'react-redux';
import { getIsUserLoggedIn } from '../../store/selectors';
import { connectRequest, logoutRequest } from '../../store/actions';

const mapStateToProps = state => ({
  isUserLoggedIn: getIsUserLoggedIn(state),
});

const mapDispatchToProps = {
  connectRequest,
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps);
