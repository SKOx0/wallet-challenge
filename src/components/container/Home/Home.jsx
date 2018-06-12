import React from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';
import Header from 'components/common/Header';
import Menu from 'components/common/Menu';
import Tabs from 'components/common/Tabs';
import PrivateRoute from 'components/common/PrivateRoute';
import { Container, Section, Columns, Column } from 'bloomer';
import PropTypes from 'prop-types';
import HomeContent from './subpages/HomeContent';

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
              <Column className="has-text-centered">
                <Switch>
                  <PrivateRoute path={`${match.path}`} exact component={HomeContent} />
                  <PrivateRoute path={`${match.path}/bitcoin`} component={Tabs} />
                  <PrivateRoute path={`${match.path}/brita`} component={Header} />
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
