import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <NavWrapper>
      <NavLinks />
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;
