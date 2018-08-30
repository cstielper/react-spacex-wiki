import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    border-bottom: 1px solid #b4b4b5;
  }

  li {
    flex: 1 1 auto;
    border-right: 1px solid #b4b4b5;

    &:last-of-type {
      border-right: 0;
    }
  }

  a {
    display: block;
    padding: 1rem;
    font-size: 0.75em;
    background: #dededf;
    color: #0d0405;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: background 0.25s ease-in-out;

    &:hover {
      background: #cfcfd1;
    }

    &.active,
    &:active:hover {
      background: #c8c8c9;
    }

    &.active:hover {
      cursor: text;
    }
  }
`;

const Navigation = () => (
  <Nav>
    <ul>
      <li>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/launches" exact activeClassName="active">
          Launches
        </NavLink>
      </li>
      <li>
        <NavLink to="/rockets" exact activeClassName="active">
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/capsules" exact activeClassName="active">
          Capsules
        </NavLink>
      </li>
    </ul>
  </Nav>
);

export default Navigation;
