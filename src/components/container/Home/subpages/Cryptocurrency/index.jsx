import React from 'react';
import { NavLink, withRouter, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from 'components/common/PrivateRoute';
import { Content, Tabs, TabList, Tab } from 'bloomer';
import { object, string } from 'prop-types';
import styled from 'react-emotion';
import Venda from './Venda';
import Comprar from './Comprar';
import Troca from './Troca';
import Transacoes from './Transacoes';

const Amount = styled('div')`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Cryptocurrency = (props) => (
  <Content>
    <Tabs>
      <TabList>
        <Tab>
          <NavLink to={`${props.match.path}/`} exact activeClassName="is-active">
            <span>Comprar</span>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to={`${props.match.path}/vender`} activeClassName="is-active">
            <span>Vender</span>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to={`${props.match.path}/trocar`} activeClassName="is-active">
            <span>Trocar</span>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to={`${props.match.path}/transacoes`} activeClassName="is-active">
            <span>Transações</span>
          </NavLink>
        </Tab>
      </TabList>
      <Amount>Total em reais: {props.balance.real.saldo}</Amount>
      <Amount>Total em {props.name}: {props.balance[props.name].saldo}</Amount>
    </Tabs>
    <Switch>
      <PrivateRoute path={`${props.match.path}/`} exact render={() => <Comprar moeda={props.name} />} />
      <PrivateRoute path={`${props.match.path}/vender`} exact render={() => <Venda moeda={props.name} />} />
      <PrivateRoute path={`${props.match.path}/trocar`} render={() => <Troca moeda={props.name} />} />
      <PrivateRoute path={`${props.match.path}/transacoes`} render={() => <Transacoes moeda={props.name} />} />
      <Redirect to={`${props.match.url}`} />
    </Switch>
  </Content>
);

export default withRouter(Cryptocurrency);

Cryptocurrency.propTypes = {
  match: object.isRequired,
  name: string.isRequired,
  balance: object
};
