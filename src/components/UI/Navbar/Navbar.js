import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import Menu from '../../../assets/menu-icon.svg';

const Navbar = () => {
  return (
    <NavWrapper>
      <img src={Menu} alt="Menu" />
      <NavLinks />
      <div className="last_item" />
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    margin-left: 1.5rem;
    cursor: pointer;
  }

  .last_item {
    margin-left: 2rem;
  }
`;
