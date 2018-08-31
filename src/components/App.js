import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Masthead from './static/Masthead';
import Footer from './static/Footer';
import Error404 from './static/404';

import Home from './home/Home';
import Launches from './launches/Launches';
import Rockets from './rockets/Rockets';
import Capsules from './capsules/Capsules';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Masthead />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/launches" component={Launches} />
            <Route path="/rockets" component={Rockets} />
            <Route path="/capsules" component={Capsules} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
