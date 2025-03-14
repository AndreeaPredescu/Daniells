import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 250px;
  height: 100%;
  background-color: #e17992;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: left 0.3s ease;
  z-index: 1000;
`;

export const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
`;

export const SidebarNavItem = styled.div`
  position: relative;
  padding: 10px 0;
  cursor: pointer;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  transition: color 0.3s ease;

  &:focus,
  &:hover {
    color: #ff3383;
  }
`;

export const SidebarSubmenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding-left: 20px;
`;

export const SidebarSubmenuToggle = styled.span`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

export const SidebarSubmenuItem = styled(SidebarNavItem)`
  &:hover {
    color: #ff3383;
  }
`;
