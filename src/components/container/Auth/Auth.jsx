import React from 'react';
import { Hero, HeroBody, Container, Column, Field, Columns, Control, Button, Help } from 'bloomer';
import Background from 'components/common/Background';
import Title from 'components/common/Title';
import Form from 'components/common/Form';
import Input from 'components/common/Input';
import colors from 'styles/theme';

const inputAuthStyle = {
  borderRadius: '3px',
  borderWidth: '1px',
  borderColor: '#717171'
};

export default class Auth extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Background color={colors.background.base}>
        <Hero isFullHeight>
          <HeroBody>
            <Container hasTextAlign="centered">
              <Columns isVCentered>
                <Column className="is-4 is-offset-4">
                  <Title color={colors.background.inverse} className="has-text-centered is-size-4 has-text-weight-bold mb-25">Bem-vindo ao Wallet Rock!</Title>
                  <Form bgColor={colors.background.inverse} className="p-30">
                    <Title color="black" className="has-text-centered is-size-5">Crie sua carteira</Title>

                    <Field className="mt-30">
                      <Control>
                        <Input {...inputAuthStyle} type="text" placeholder="E-mail" />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Input {...inputAuthStyle} type="password" placeholder="Senha" />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Input {...inputAuthStyle} type="password" placeholder="Confirmar senha" />
                      </Control>
                    </Field>

                    <Button isFullWidth isSize="large" type="submit" className="mt-50">Cadastrar</Button>
                  </Form>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
      </Background>
    );
  }
}
