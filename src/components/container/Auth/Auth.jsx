import React from 'react';
import PropTypes from 'prop-types';
import { Hero, HeroBody, Container, Column, Columns } from 'bloomer';
import Background from 'components/common/Background';
import colors from 'styles/theme';
import Title from 'components/common/Title';
import { Redirect, Switch, Route } from 'react-router-dom';
import NewAccount from './Forms/NewAccount';
import Login from './Forms/Login';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.changeForm = this.changeForm.bind(this);
  }

  componentDidUpdate() {
    const { resetNewAccountForm, accountCreated } = this.props;

    if (accountCreated) {
      this.changeForm(true);
      resetNewAccountForm(false);
    }
  }

  changeForm(formState) {
    const { history } = this.props;

    if (!formState) {
      history.push('auth/new');
    } else {
      history.push('auth');
    }
  }

  render() {
    if (this.props.isAuthenticated) {
      return (<Redirect to={{ pathname: '/' }} />);
    }

    const {
      onCreateAccountSubmit, onLoginSubmit, match
    } = this.props;

    return (
      <Background color={colors.background.base}>
        <Hero isFullHeight>
          <HeroBody>
            <Container hasTextAlign="centered">
              <Columns isVCentered>
                <Column className="is-4 is-offset-4">
                  <Title color={colors.background.inverse} className="has-text-centered is-size-4 has-text-weight-bold mb-25">Bem-vindo ao Wallet Rock!</Title>
                  <Switch>
                    <Route path={`${match.path}`} exact render={() => <Login onSubmitForm={onLoginSubmit} changeForm={() => this.changeForm(false)} />} />
                    <Route path={`${match.path}/new`} render={() => <NewAccount onSubmitForm={onCreateAccountSubmit} changeForm={() => this.changeForm(true)} />} />
                    <Redirect to={`${match.url}`} />
                  </Switch>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
      </Background>
    );
  }
}

export default Auth;

Auth.propTypes = {
  onLoginSubmit: PropTypes.func,
  onCreateAccountSubmit: PropTypes.func,
  resetNewAccountForm: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
  accountCreated: PropTypes.bool,
  isAuthenticated: PropTypes.bool
};
