import React from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';

const Error404 = () => (
  <React.Fragment>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <div className="component-wrapper">
      <article>
        <header className="article-header">
          <h1>Sorry, but that page can't be found.</h1>
        </header>
        <div className="article-wrapper">
          <p>
            Please use the back button in your browser or{' '}
            <NavLink to="/" exact>
              return to the home page
            </NavLink>
            .
          </p>
        </div>
      </article>
    </div>
  </React.Fragment>
);

export default Error404;
