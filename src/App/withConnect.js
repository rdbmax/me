import { connect } from 'react-redux';
import { setPage } from '../store/actions';

const mapDispatchToProps = { setPage };

export default connect(null, mapDispatchToProps);
