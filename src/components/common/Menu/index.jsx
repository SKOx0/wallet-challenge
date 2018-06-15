import React from 'react';
import { Menu, MenuLabel, MenuList } from 'bloomer';
import { NavLink } from 'react-router-dom';

const MenuComponent = () => (
  <Menu>
    <MenuList>
      <li><NavLink exact to="/home" activeClassName="is-active">Inicio</NavLink></li>
    </MenuList>
    <MenuLabel>Moedas</MenuLabel>
    <MenuList>
      <li><NavLink to="/home/bitcoin" activeClassName="is-active">Bitcoin</NavLink></li>
      <li><NavLink to="/home/brita" activeClassName="is-active">Brita</NavLink></li>
      <li><NavLink to="/home/transacoes" activeClassName="is-active">Transações</NavLink></li>
    </MenuList>
  </Menu>
);

export default MenuComponent;
