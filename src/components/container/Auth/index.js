import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Auth from './Auth';
import { authenticate } from './actions';

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(authenticate(evt.target));
  },
});

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
export { mapDispatchToProps };
