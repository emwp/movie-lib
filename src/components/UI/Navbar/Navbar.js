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
  height: 3.5rem;
`;
