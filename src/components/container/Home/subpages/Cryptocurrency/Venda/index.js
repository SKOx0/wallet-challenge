import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Venda from './Venda';

const mapDispatchToProps = () => ({

});

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, mapDispatchToProps)(Venda);
export { mapDispatchToProps };
