import { connect } from 'react-redux';
import { getCurrentPage } from '../../store/selectors/url';

const mapStateToProps = state => ({
  currentPage: getCurrentPage(state),
});

export default connect(mapStateToProps);
