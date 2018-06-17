import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Header from 'components/common/Header';
import Menu from 'components/common/Menu';
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
    const {
      match, balance, transactions, onLogout
    } = this.props;
    return (
      <div>
        <Header onLogout={(onLogout)} />
        <Section>
          <Container>
            <Columns>
              <Column className="is-3">
                <Menu />
              </Column>
              <Column>
                <Switch>
                  <Route path={`${match.path}`} exact component={HomeContent} />
                  <Route path={`${match.path}/bitcoin`} render={() => <Cryptocurrency balance={balance} name="bitcoin" />} />
                  <Route path={`${match.path}/brita`} render={() => <Cryptocurrency balance={balance} name="brita" />} />
                  <Route path={`${match.path}/transacoes`} render={() => <Transacoes transactions={transactions} />} />
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

export default Home;

Home.propTypes = {
  match: object,
  balance: object,
  getInitialBalance: func,
  listTransactions: func,
  transactions: array,
  onLogout: func
};
