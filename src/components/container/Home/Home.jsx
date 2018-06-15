import React from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';
import Header from 'components/common/Header';
import Menu from 'components/common/Menu';
import PrivateRoute from 'components/common/PrivateRoute';
import { Container, Section, Columns, Column } from 'bloomer';
import { object, func, array } from 'prop-types';
import HomeContent from './subpages/HomeContent';
import Cryptocurrency from './subpages/Cryptocurrency/index';
import Transacoes from './subpages/Cryptocurrency/Transacoes';

class Home extends React.PureComponent {
  componentDidMount() {
    const { getInitialBalance, listTransactions } = this.props;

    getInitialBalance();

    listTransactions();
  }

  render() {
    const { match, balance, transactions } = this.props;
    return (
      <div>
        <Header />
        <Section>
          <Container>
            <Columns>
              <Column className="is-3">
                <Menu />
              </Column>
              <Column>
                <Switch>
                  <PrivateRoute path={`${match.path}`} exact component={HomeContent} />
                  <PrivateRoute path={`${match.path}/bitcoin`} render={() => <Cryptocurrency balance={balance} name="bitcoin" />} />
                  <PrivateRoute path={`${match.path}/brita`} render={() => <Cryptocurrency balance={balance} name="brita" />} />
                  <PrivateRoute path={`${match.path}/transacoes`} render={() => <Transacoes transactions={transactions} />} />
                  <Redirect to={`${match.url}`} />
                </Switch>
              </Column>
            </Columns>
          </Container>
        </Section>
      </div>
    );
  }
}

export default withRouter(Home);

Home.propTypes = {
  match: object,
  balance: object,
  getInitialBalance: func,
  listTransactions: func,
  transactions: array
};
