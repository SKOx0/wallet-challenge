import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, NavbarBrand, NavbarItem, NavbarMenu, NavbarEnd, Button } from 'bloomer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid';
import { func } from 'prop-types';

const Header = (props) => (
  <Navbar className="has-shadow is-spaced">
    <Container>
      <NavbarBrand>
        <NavbarItem>
          <NavLink to="/"> Wallet Rock </NavLink>
        </NavbarItem>
        <NavbarItem href="#" isHidden="desktop">
          <FontAwesomeIcon icon={Icons.faSignOutAlt} className="mr-5"></FontAwesomeIcon>
          <span>Sair</span>
        </NavbarItem>
      </NavbarBrand>

      <NavbarMenu>
        <NavbarEnd>
          <NavbarItem isHidden="touch" onClick={props.onLogout}>
            <Button>
              <FontAwesomeIcon icon={Icons.faSignOutAlt} className="mr-5"></FontAwesomeIcon>
              <span>Sair</span>
            </Button>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Container>
  </Navbar>
);

export default Header;

Header.propTypes = {
  onLogout: func
};
