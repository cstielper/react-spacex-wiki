import React from 'react';
import Helmet from 'react-helmet';
import LaunchCard from './LaunchCard';

class Launches extends React.Component {
  yearSelect = React.createRef();

  constructor() {
    super();
    this.state = {
      data: [],
      years: [],
      filters: {
        year: null,
      },
    };
  }

  // Grab data from the API, set it to state
  // Take state data and create a unique array of years and set that to state
  componentDidMount() {
    fetch('https://api.spacexdata.com/v2/launches/?order=desc')
      .then(res => res.json())
      .then(data => this.setState({ data: data }))
      .then(() => filterYears(this.state.data))
      .catch(err => console.error(err));

    const filterYears = arr => {
      let yearsFiltered = [...new Set(arr.map(item => item.launch_year))];

      // 1. Take a copy of the current state
      let years = { ...this.state.years };
      // 2. Update that state
      years = yearsFiltered;
      // // 3. Set that to state
      this.setState({ years: years });
    };
  }

  filterCards = () => {
    const selectIndex = this.yearSelect.current.selectedIndex;
    const year = this.yearSelect.current[selectIndex].value;

    // 1. Take a copy of the current state
    const yearFilter = { ...this.state.filters };
    // 2. Update that state
    yearFilter.year = year;
    // 3. Set that to state
    this.setState({ filters: yearFilter });
  };

  render() {
    let cards;
    if (this.state.data.length) {
      if (!this.state.filters.year) {
        cards = this.state.data.map(item => (
          <LaunchCard {...item} key={'flight-' + item.flight_number} />
        ));
      } else {
        cards = this.state.data
          .filter(item => item.launch_year === this.state.filters.year)
          .map(item => (
            <LaunchCard {...item} key={'flight-' + item.flight_number} />
          ));
      }
    }

    return (
      <div className="component-wrapper">
        <Helmet>
          <title>SpaceX Launches</title>
          <meta name="description" content="Information about past SpaceX launches" />
        </Helmet>
        <figure className="feature-img">
          <img src="images/rocket-sm.jpg" srcSet="images/rocket-sm.jpg 400w, images/rocket-md.jpg 800w, images/rocket-lg.jpg 1200w, images/rocket-xl.jpg 2200w" sizes="100vw"  alt="SpaceX rocket launching" />
        </figure>
        <article>
          <header className="article-header">
            <h1>SpaceX Launches</h1>
          </header>
            <form>
              <label htmlFor="form-filter-year">View by year: </label>
              <select
                name="form-filter-year"
                id="form-filter-year"
                onChange={this.filterCards}
                ref={this.yearSelect}
              >
                <option value="">All Launches</option>
                {this.state.years.map(year => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                ))}
              </select>
            </form>
            <div className="wrapper flex">
              {cards}
            </div>
        </article>
      </div>
    );
  }
}

export default Launches;
