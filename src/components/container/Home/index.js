import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from './Home';
import { doTest } from './actions';

const mapDispatchToProps = (dispatch) => ({
  onTeste: () => dispatch(doTest()),
});

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
export { mapDispatchToProps };
