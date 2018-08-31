import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../spacex-logo.svg';
import styled from 'styled-components';

import Navigation from './Navigation';

const Header = styled.header`
  padding: 0.75rem 0 0;
  background: #181c1f;

  img {
    width: 200px;
    display: block;
    margin: 0 auto;

    @media (min-width: 46em) {
      width: 250px;
      margin: 0;
    }
  }

  @media (min-width: 46em) {
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
  }
`;

const Masthead = () => (
  <Header>
    <NavLink to="/" exact>
      <img src={logo} alt="SpaceX logo" />
    </NavLink>
    <Navigation />
  </Header>
);

export default Masthead;
