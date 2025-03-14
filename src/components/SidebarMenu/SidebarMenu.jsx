import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SidebarWrapper,
  CloseButton,
  SidebarNavItem,
  SidebarSubmenu,
  SidebarSubmenuToggle,
  SidebarSubmenuItem,
} from './SidebarMenu.styled';

const SidebarMenu = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({
    products: false,
    compositions: false,
  });

  const toggleSubmenu = menu => {
    setIsSubmenuOpen(prevState => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleNavigation = path => {
    navigate(path);
    toggleMenu();
  };

  return (
    <SidebarWrapper isOpen={isOpen}>
      <CloseButton onClick={toggleMenu}>×</CloseButton>
      <SidebarNavItem onClick={() => handleNavigation('/')}>
        Acasă
      </SidebarNavItem>
      <SidebarNavItem onClick={() => handleNavigation('/about-us')}>
        Despre noi
      </SidebarNavItem>

      <SidebarNavItem onClick={() => toggleSubmenu('products')}>
        Produsele noastre
        <SidebarSubmenuToggle>
          {isSubmenuOpen.products ? '-' : '+'}
        </SidebarSubmenuToggle>
      </SidebarNavItem>
      <SidebarSubmenu isOpen={isSubmenuOpen.products}>
        <SidebarSubmenuItem
          onClick={() => handleNavigation('/products/birthdayCakes')}
        >
          Torturi aniversare
        </SidebarSubmenuItem>
        <SidebarSubmenuItem
          onClick={() => handleNavigation('/products/baptismCakes')}
        >
          Torturi botez
        </SidebarSubmenuItem>
        <SidebarSubmenuItem
          onClick={() => handleNavigation('/products/weddingCakes')}
        >
          Torturi nuntă
        </SidebarSubmenuItem>
      </SidebarSubmenu>

      <SidebarNavItem onClick={() => handleNavigation('/candy-bar')}>
        Candy Bar
      </SidebarNavItem>

      <SidebarNavItem onClick={() => toggleSubmenu('compositions')}>
        Compoziții
        <SidebarSubmenuToggle>
          {isSubmenuOpen.compositions ? '-' : '+'}
        </SidebarSubmenuToggle>
      </SidebarNavItem>
      <SidebarSubmenu isOpen={isSubmenuOpen.compositions}>
        <SidebarSubmenuItem onClick={() => handleNavigation('/fillings/cakes')}>
          Torturi
        </SidebarSubmenuItem>
        <SidebarSubmenuItem
          onClick={() => handleNavigation('/fillings/desserts')}
        >
          Prajituri
        </SidebarSubmenuItem>
      </SidebarSubmenu>

      <SidebarNavItem onClick={() => handleNavigation('/contact')}>
        Contact
      </SidebarNavItem>
    </SidebarWrapper>
  );
};

export default SidebarMenu;
