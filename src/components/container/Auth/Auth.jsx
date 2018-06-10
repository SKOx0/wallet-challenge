import React from 'react';
import PropTypes from 'prop-types';
import { Hero, HeroBody, Container, Column, Columns } from 'bloomer';
import Background from 'components/common/Background';
import colors from 'styles/theme';
import Title from 'components/common/Title';
import NewAccount from './Forms/NewAccount';
import Login from './Forms/Login';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginForm: false
    };

    this.changeForm = this.changeForm.bind(this);
  }

  changeForm(formState) {
    this.setState({ isLoginForm: formState });
  }

  render() {
    const { onSubmitForm } = this.props;

    const currentForm = this.state.isLoginForm ?
      (<Login onSubmitForm={onSubmitForm} changeForm={() => this.changeForm(false)}></Login>)
      : (<NewAccount onSubmitForm={onSubmitForm} changeForm={() => this.changeForm(true)}></NewAccount>);

    return (
      <Background color={colors.background.base}>
        <Hero isFullHeight>
          <HeroBody>
            <Container hasTextAlign="centered">
              <Columns isVCentered>
                <Column className="is-4 is-offset-4">
                  <Title color={colors.background.inverse} className="has-text-centered is-size-4 has-text-weight-bold mb-25">Bem-vindo ao Wallet Rock!</Title>
                  {currentForm}
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
  onSubmitForm: PropTypes.func
};
