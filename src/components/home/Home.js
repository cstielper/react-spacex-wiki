import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Article = styled.article`
  section > h2 {
    margin-bottom: 0.25rem;
  }
`;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v2/info')
      .then(res => res.json())
      .then(data => this.setState({ data: data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="component-wrapper">
        <Helmet>
          <title>SpaceX Info</title>
          <meta name="description" content="A small React project using the SpaceX api" />
        </Helmet>

        <figure className="feature-img">
          <img src="images/satellite-sm.jpg" srcSet="images/satellite-sm.jpg 400w, images/satellite-md.jpg 800w, images/satellite-lg.jpg 1200w, images/satellite-xl.jpg 2200w" sizes="100vw"  alt="SpaceX satellite" />
        </figure>

        <Article>
          <header className="article-header">
            <h1>About SpaceX</h1>
          </header>
          <p>{this.state.data.summary}</p>
          <section>
            <h2>Company Info</h2>
            <ul>
              {this.state.data.founded ? (
                <li>Founded: {this.state.data.founded}</li>
              ) : (
                ''
              )}
              {this.state.data.employees ? (
                <li>Employees: {this.state.data.employees}</li>
              ) : (
                ''
              )}
              {this.state.data.launch_sites ? (
                <li>Launch Sites: {this.state.data.launch_sites}</li>
              ) : (
                ''
              )}
              {this.state.data.test_sites ? (
                <li>Test Sites: {this.state.data.test_sites}</li>
              ) : (
                ''
              )}
              {this.state.data.vehicles ? (
                <li>Vehicles: {this.state.data.vehicles}</li>
              ) : (
                ''
              )}
            </ul>
          </section>
          <section>
            <h2>Company Leadership</h2>
            <ul>
              {this.state.data.ceo ? <li>CEO: {this.state.data.ceo}</li> : ''}
              {this.state.data.coo ? <li>COO: {this.state.data.coo}</li> : ''}
              {this.state.data.cto ? <li>CTO: {this.state.data.cto}</li> : ''}
              {this.state.data.cto_propulsion ? (
                <li>CTO of Propulsion: {this.state.data.cto_propulsion}</li>
              ) : (
                ''
              )}
            </ul>
          </section>
        </Article>
      </div>
    );
  }
}

export default Home;
