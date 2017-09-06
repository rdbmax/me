import { connect } from 'react-redux';
import { getPageType } from 'store/selectors';

const mapStateToProps = state => ({
  page: getPageType(state),
});

export default connect(mapStateToProps);
