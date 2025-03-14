import styled, { keyframes } from 'styled-components';

const slideInFromTop = keyframes`
  from {
    transform: translateY(-200%);
  }
  to {
    transform: translateY(0);
  }
`;

export const HeaderWrapper = styled.header`
  animation: 1s ease-out 0s 1 ${slideInFromTop};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const Logo = styled.div`
  img {
    max-width: 100px;
    height: auto;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  position: relative;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    &:hover {
      color: #ff3383;
    }
  }

  &:hover > div {
    display: block;
  }
`;

export const SubMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffb8ca;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    &:hover {
      color: #ff3383;
      background-color: #f1f1f1;
    }
  }
`;

export const Hamburger = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: space-around;

  div {
    width: 30px;
    height: 3px;
    background-color: #fff;
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const SubMenuItem = styled.div``;
