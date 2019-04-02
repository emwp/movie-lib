import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import Menu from '../../../assets/menu-icon.svg';
import { connect } from 'react-redux';
import { TOGGLE_SIDEBAR } from '../../../store/actions/types';

const Navbar = ({ toggleSidebar }) => {
  const sidebarHandler = () => {
    toggleSidebar();
  };
  return (
    <NavWrapper>
      <img onClick={sidebarHandler} src={Menu} alt="Menu" />
      <NavLinks />
      <div className="last_item" />
    </NavWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Navbar);

/* ----------- STYLES ----------- */

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
