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
        <NavLink to="/movies" exact className="nav-link">
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/series" exact className="nav-link">
          Series
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
  justify-content: center;
  align-content: center;

  .nav-link {
    color: #263238;
    margin: 0 1rem;
    text-decoration: none;
    border: 2px solid #263238;
    padding: 5px 10px;
    border-radius: 1rem;
    display: inline-block;
  }
  .nav-link:hover,
  .hvr-grow:focus,
  .nav-link:active,
  .nav-link.active {
    background: #263238;
    color: #dddddd;
  }
`;
