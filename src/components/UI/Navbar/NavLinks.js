import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinks = () => {
  return (
    <NavLinksWrapper>
      <li>
        <NavLink to="/" exact className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact className="nav-link">
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact className="nav-link">
          TV Shows
        </NavLink>
      </li>
    </NavLinksWrapper>
  );
};

export default NavLinks;

const NavLinksWrapper = styled.ul`
  display: flex;
  margin: 0 0 0 2rem;
  padding: 0;
  list-style: none;

  .nav-link {
    margin: 0 1rem;
    color: #fe6756;
    background: white;
    text-decoration: none;
    border: 2px solid #fe6756;
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
  }
  .nav-link:hover,
  .hvr-grow:focus,
  .nav-link:active,
  .nav-link.active {
    background: #fe6756;
    color: white;
  }
`;
