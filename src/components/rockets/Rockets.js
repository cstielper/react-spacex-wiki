import React from 'react';
import Helmet from 'react-helmet';
import RocketCard from './RocketCard';

class Rockets extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v2/rockets')
      .then(res => res.json())
      .then(data => this.setState({ data: data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="component-wrapper">
        <Helmet>
          <title>SpaceX Rockets</title>
          <meta
            name="description"
            content="Information about past SpaceX rockets"
          />
        </Helmet>
        <figure className="feature-img">
          <img
            src="images/hangar-sm.jpg"
            srcSet="images/hangar-sm.jpg 400w, images/hangar-md.jpg 800w, images/hangar-lg.jpg 1200w, images/hangar-xl.jpg 2200w"
            sizes="100vw"
            alt="SpaceX rockets in a hangar"
          />
        </figure>
        <article>
          <header className="article-header">
            <h1>SpaceX Rockets</h1>
          </header>
          <div className="wrapper card-wrapper">
            {this.state.data.map(item => (
              <RocketCard {...item} key={'rocket-' + item.rocketid} />
            ))}
          </div>
        </article>
      </div>
    );
  }
}

export default Rockets;
