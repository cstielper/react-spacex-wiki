import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import LaunchCard from './LaunchCard';

const LaunchForm = styled.form`
  background: #eee;

  > div {
    margin-top: 0.5rem;
  }

  select {
    text-transform: capitalize;
  }

  @media (min-width: 46em) {
    display: flex;
    align-items: center;

    > div,
    input[type='submit'] {
      margin-top: 0;
    }

    > div {
      margin-right: 0.5rem;
    }
  }
`;

class Launches extends React.Component {
  yearSelect = React.createRef();
  successSelect = React.createRef();

  constructor() {
    super();
    this.state = {
      data: [],
      formControls: null,
      filters: {},
    };
  }

  // Grab data from the API, set it to state
  // Take state data and create and set formControls in state
  componentDidMount() {
    fetch('https://api.spacexdata.com/v2/launches/?order=desc')
      .then(res => res.json())
      .then(data => this.setState({ data: data }))
      .then(() => init(this.state.data))
      .catch(err => console.error(err));

    const init = arr => {
      let yearFiltered = [...new Set(arr.map(item => item.launch_year))];
      yearFiltered.unshift('any');

      let successesFiltered = [
        ...new Set(arr.map(item => item.launch_success.toString())),
      ];
      successesFiltered.unshift('any');

      // 1. Take a copy of the current state
      const controls = { ...this.state.formControls };
      // 2. Update that state
      controls.launch_year = yearFiltered;
      controls.launch_success = successesFiltered;
      // 3. Set that to state
      this.setState({ formControls: controls });
    };
  }

  // Once state.formControls has some keys... build the form based on the key's array
  buildForm = () => {
    if (this.state.formControls && Object.keys(this.state.formControls)) {
      return (
        <LaunchForm onSubmit={this.setFilters}>
          <div>
            <label htmlFor="form-filter-year">Year: </label>
            <select
              name="form-filter-year"
              id="form-filter-year"
              ref={this.yearSelect}
            >
              {this.state.formControls.launch_year.map(year => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="form-filter-success">Launch Status: </label>
            <select
              name="form-filter-success"
              id="form-filter-success"
              ref={this.successSelect}
            >
              {this.state.formControls.launch_success.map(status => (
                <option value={status} key={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <input type="submit" value="Filter Launches" />
        </LaunchForm>
      );
    }
  };

  // Update state.filters based on form submittal
  setFilters = e => {
    e.preventDefault();

    // 1. Take a copy of the current state
    const filters = this.state.filters;

    // 2. Update that state
    const yearSelectIndex = this.yearSelect.current.selectedIndex;
    let year = this.yearSelect.current[yearSelectIndex].value;

    if (year !== 'any') {
      filters.launch_year = year;
    } else {
      delete filters.launch_year;
    }

    const successSelectIndex = this.successSelect.current.selectedIndex;
    let success = this.successSelect.current[successSelectIndex].value;

    if (success !== 'any') {
      filters.launch_success = success;
    } else {
      delete filters.launch_success;
    }

    // 3. Set that to state
    this.setState({ filters: filters });
  };

  // If there are keys in state.filters, "for/in" through the keys
  // For each key, reduce the data based on the key value
  // If there are no keys in the filters array, just map over state.data and return all results
  buildCards = () => {
    let cards, filtered;

    const filter = key => {
      if (!filtered) {
        filtered = this.state.data.filter(
          card => card[key].toString() === this.state.filters[key]
        );
      } else {
        filtered = filtered.filter(
          card => card[key].toString() === this.state.filters[key]
        );
      }

      return filtered;
    };

    if (Object.keys(this.state.filters).length) {
      for (const prop in this.state.filters) {
        filter(prop);
      }
      cards = filtered.map(card => (
        <LaunchCard {...card} key={'flight-' + card.flight_number} />
      ));
    } else {
      cards = this.state.data.map(card => (
        <LaunchCard {...card} key={'flight-' + card.flight_number} />
      ));
    }

    return cards;
  };

  render() {
    return (
      <div className="component-wrapper">
        <Helmet>
          <title>SpaceX Launches</title>
          <meta
            name="description"
            content="Information about past SpaceX launches"
          />
        </Helmet>
        <figure className="feature-img">
          <img
            src="images/rocket-sm.jpg"
            srcSet="images/rocket-sm.jpg 400w, images/rocket-md.jpg 800w, images/rocket-lg.jpg 1200w, images/rocket-xl.jpg 2200w"
            sizes="100vw"
            alt="SpaceX rocket launching"
          />
        </figure>
        <article>
          <header className="article-header">
            <h1>SpaceX Launches</h1>
          </header>
          <div className="article-wrapper">{this.buildForm()}</div>
          <div className="wrapper card-wrapper">{this.buildCards()}</div>
        </article>
      </div>
    );
  }
}

export default Launches;
