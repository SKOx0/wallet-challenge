import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Transacoes from './Transacoes';

const mapDispatchToProps = () => ({

});

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, mapDispatchToProps)(Transacoes);
export { mapDispatchToProps };
