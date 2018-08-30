import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Colophon = styled.footer`
  margin-top: auto;
  padding: 1rem;
  background: #181c1f;
  color: #fff;
  text-align: center;

  a {
    color: #fff;

    &:hover {
      text-decoration: none;
    }
  }

  small {
    display: block;
    margin: 0 auto;
    max-width: 75%;
    font-size: 65%;
    line-height: 1.375;
  }
`;

const Footer = () => (
  <Colophon>
    <small>
      This project is not affiliated with the SpaceX company or any of its
      affiliates in any way. I'm just a web developer tinkering with React who
      loves space exploration and working with APIs. All images released under{' '}
      <NavLink
        to="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
        exact
        activeClassName="active"
      >
        Creative Commons CC0
      </NavLink>
      .
    </small>
  </Colophon>
);

export default Footer;
