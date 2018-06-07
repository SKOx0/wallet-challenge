import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Auth from './Auth';
import { doTest } from './actions';

const mapDispatchToProps = (dispatch) => ({
  onTeste: () => dispatch(doTest()),
});

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
export { mapDispatchToProps };
