import React from 'react';
import { NavLink, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from 'components/common/PrivateRoute';
import { Content, Tabs, TabList, Tab } from 'bloomer';
import { object, string, func, array } from 'prop-types';
import styled from 'react-emotion';

import Venda from './Venda';
import Comprar from './Comprar';
import Troca from './Troca';
import { listAvailibleCurrencies } from '../../actions';

const Amount = styled('div')`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

class Cryptocurrency extends React.PureComponent {
  componentDidMount() {
    const { dispatch, name } = this.props;

    dispatch(listAvailibleCurrencies(name));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      const { dispatch, name } = this.props;

      dispatch(listAvailibleCurrencies(name));
    }
  }

  render() {
    const {
      match, name, balance, currencyList
    } = this.props;
    return (
      <Content>
        <Tabs>
          <TabList>
            <Tab>
              <NavLink to={`${match.path}/`} exact activeClassName="is-active">
                <span>Comprar</span>
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to={`${match.path}/vender`} activeClassName="is-active">
                <span>Vender</span>
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to={`${match.path}/trocar`} activeClassName="is-active">
                <span>Trocar</span>
              </NavLink>
            </Tab>
          </TabList>
          <Amount>Total em reais: {balance.real.saldo}</Amount>
          <Amount>Total em {name}: {balance[name].saldo}</Amount>
        </Tabs>
        <Switch>
          <PrivateRoute path={`${match.path}/`} exact render={() => <Comprar moeda={name} />} />
          <PrivateRoute path={`${match.path}/vender`} exact render={() => <Venda moeda={name} />} />
          <PrivateRoute path={`${match.path}/trocar`} render={() => <Troca moeda={name} currencyList={currencyList} />} />
          <Redirect to={`${match.url}`} />
        </Switch>
      </Content>
    );
  }
}


export default Cryptocurrency;

Cryptocurrency.propTypes = {
  match: object.isRequired,
  name: string.isRequired,
  balance: object,
  dispatch: func,
  currencyList: array
};
