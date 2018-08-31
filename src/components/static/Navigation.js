import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  @media (min-width: 46em) {
    margin-left: auto;
  }

  ul {
    display: flex;
    justify-content: center;
    margin: 0.75rem 0 0;

    @media (min-width: 46em) {
      margin: 0;
    }
  }

  li {
    flex: 1 1 auto;
    border-right: 1px solid #343b3f;
    border-left: 1px solid #000;

    &:first-of-type {
      border-left: 0;
    }

    &:last-of-type {
      border-right: 0;
    }

    @media (min-width: 46em) {
      border: none;
    }
  }

  a {
    display: block;
    padding: 1rem;
    font-size: 0.75em;
    background: #21272b;
    color: #fff;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: background 0.25s ease-in-out, color 0.25s ease-in-out;
    font-family: 'Lato', sans-serif;
    letter-spacing: 0.03125em;

    &.active,
    &:hover,
    &:active:hover {
      background: #2a3135;
      color: #ccac55;
    }

    &.active:hover {
      cursor: text;
    }

    @media (min-width: 46em) {
      padding: 1.75rem 1rem 1.625rem;
      font-size: 0.9375em;

      & {
        background: none;
      }
    }
  }
`;

const Navigation = () => (
  <Nav>
    <ul>
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
