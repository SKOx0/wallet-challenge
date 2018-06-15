import React from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';
import Header from 'components/common/Header';
import Menu from 'components/common/Menu';
import PrivateRoute from 'components/common/PrivateRoute';
import { Container, Section, Columns, Column } from 'bloomer';
import { object, func } from 'prop-types';
import HomeContent from './subpages/HomeContent';
import Cryptocurrency from './subpages/Cryptocurrency/index';

class Home extends React.PureComponent {
  componentDidMount() {
    const { getInitialBalance } = this.props;

    getInitialBalance();
  }

  render() {
    const { match, balance } = this.props;
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
  getInitialBalance: func
};
