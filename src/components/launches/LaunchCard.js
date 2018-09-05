import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Card = styled.section`
  .patch {
    max-width: 45%;
    display: block;
    margin: 0 auto;
  }

  .section-header {
    margin-bottom: 1.25rem;

    h2 {
      margin-bottom: 0.25rem;
    }

    span {
      display: inline-block;
      margin-bottom: 0.4375rem;
      font-size: 0.875rem;
      line-height: 1.3125;
    }

    .launch-success {
      margin-top: 1em;
      font-size: 0.75em;
    }
  }
`;

const LaunchCard = props => (
  <Card className="card">
    <div>
      {props.links.mission_patch_small ? (
        <img
          src={props.links.mission_patch_small}
          alt={props.mission_name + ' Mission Patch'}
          className="patch"
        />
      ) : (
        ''
      )}

      <header className="section-header">
        <h2>{props.mission_name}</h2>
        <span className="flight-num">
          <strong>Flight Number:</strong> {props.flight_number}
        </span>
        <br />
        <span className="launch-date">
          <strong>Launch Date:</strong>{' '}
          {moment(props.launch_date_utc).format('MMMM D, YYYY')}
        </span>
        <br />
        <span className="launch-site">
          <strong>Launch Site:</strong> {props.launch_site.site_name_long}
        </span>
        {props.launch_success ? (
          <React.Fragment>
            <br />
            <span className="launch-success successful">Launch Successful</span>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <br />
            <span className="launch-success unsuccessful">
              Launch Unsuccessful
            </span>
          </React.Fragment>
        )}
      </header>
      {props.details ? <p>{props.details}</p> : ''}
      {props.links.video_link ? (
        <a href={props.links.video_link} className="btn">
          Watch Video
        </a>
      ) : (
        ''
      )}
      <div className="details">
        <h3>Mission Details</h3>
        <ul>
          <li className="rocket-name">
            Rocket Name: {props.rocket.rocket_name}
          </li>
          <li className="rocket-type">
            Rocket Type: {props.rocket.rocket_type}
          </li>
          <li className="payload-type">
            Payload: {props.rocket.second_stage.payloads[0].payload_type}
          </li>
          <li className="payload-nationality">
            Payload Nationality:{' '}
            {props.rocket.second_stage.payloads[0].nationality}
          </li>
          <li className="payload-mass">
            Payload Mass:{' '}
            {props.rocket.second_stage.payloads[0].payload_mass_kg} kg
          </li>
        </ul>
      </div>
    </div>
  </Card>
);

export default LaunchCard;
