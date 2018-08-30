import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 0.75rem 1rem 1rem;
  background: #181c1f;

  img {
    display: block;
    margin: 0 auto;
  }
`;

const Masthead = () => (
  <Header>
    <img src="images/spacex-logo.png" alt="SpaceX logo" />
  </Header>
);

export default Masthead;
