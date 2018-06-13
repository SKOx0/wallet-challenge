import React from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';
import Header from 'components/common/Header';
import Menu from 'components/common/Menu';
import PrivateRoute from 'components/common/PrivateRoute';
import { Container, Section, Columns, Column } from 'bloomer';
import PropTypes from 'prop-types';
import HomeContent from './subpages/HomeContent';
import Cryptocurrency from './subpages/Cryptocurrency/index';

class Home extends React.PureComponent {
  render() {
    const { match } = this.props;
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
                  <PrivateRoute path={`${match.path}/bitcoin`} render={() => <Cryptocurrency name="bitcoin" />} />
                  <PrivateRoute path={`${match.path}/brita`} render={() => <Cryptocurrency name="brita" />} />
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
  match: PropTypes.object
};
