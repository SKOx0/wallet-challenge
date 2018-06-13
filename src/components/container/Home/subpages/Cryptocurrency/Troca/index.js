import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Troca from './Troca';

const mapDispatchToProps = () => ({

});

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, mapDispatchToProps)(Troca);
export { mapDispatchToProps };
