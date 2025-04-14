import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  NavMenu,
  NavItem,
  SubMenu,
  SubMenuItem,
  Hamburger,
} from './Header.styled';
import logoImage from '../../assets/images/logo.png';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderWrapper>
      <Logo>
        <NavLink to="/">
          <img src={logoImage} alt="Logo" />
        </NavLink>
      </Logo>
      <NavMenu>
        <NavItem>
          <NavLink to="/">Acasă</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about-us">Despre noi</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#" onClick={e => e.preventDefault()}>
            Produsele noastre
          </NavLink>
          <SubMenu>
            <SubMenuItem>
              <NavLink to="/products/birthdayCakes">Torturi Aniversare</NavLink>
            </SubMenuItem>
            <SubMenuItem>
              <NavLink to="/products/baptismCakes">Torturi Botez</NavLink>
            </SubMenuItem>
            <SubMenuItem>
              <NavLink to="/products/weddingCakes">Torturi Nuntă</NavLink>
            </SubMenuItem>
          </SubMenu>
        </NavItem>
        <NavItem>
          <NavLink to="/candy-bar">Candy Bar</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#" onClick={e => e.preventDefault()}>
            Compoziții
          </NavLink>
          <SubMenu>
            <SubMenuItem>
              <NavLink to="/fillings/cakes">Torturi</NavLink>
            </SubMenuItem>
            <SubMenuItem>
              <NavLink to="/fillings/desserts">Prăjituri</NavLink>
            </SubMenuItem>
          </SubMenu>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavMenu>
      <Hamburger onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <SidebarMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </HeaderWrapper>
  );
};

export default Header;
