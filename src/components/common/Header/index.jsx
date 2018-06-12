import React from 'react';
import { Navbar, Container, NavbarBrand, NavbarItem, NavbarMenu, NavbarEnd, NavbarStart } from 'bloomer';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import * as Icons from '@fortawesome/fontawesome-free-solid';

const Header = () => (
  <Navbar className="has-shadow is-spaced">
    <Container>
      <NavbarBrand>
        <NavbarItem>
          Wallet Rock
        </NavbarItem>
      </NavbarBrand>

      <NavbarMenu>
        <NavbarStart>
          <NavbarItem href="#" isHidden="desktop">
            {/* <FontAwesomeIcon icon={Icons.faSignOutAlt} className="mr-5"></FontAwesomeIcon> */}
            <span>Sair</span>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem href="#" isHidden="touch">
            {/* <FontAwesomeIcon icon={Icons.faSignOutAlt} className="mr-5"></FontAwesomeIcon> */}
            <span>Sair</span>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Container>
  </Navbar>
);

export default Header;
