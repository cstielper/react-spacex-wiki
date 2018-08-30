import React from 'react';
import styled from 'styled-components';

const Card = styled.section`
  padding: 0.25rem 1.25rem 1.25rem;
  margin: 2rem 0;
  background: #FFF;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.25);

  .status {
    display: inline-block;
    margin: 0 0 1.5rem;
    padding: 0.3125rem 0.625rem 0.1875rem;
    border-width: 1px;
    border-style: solid;
    font-size: 0.75em;
    letter-spacing: 0.05625em;
    text-transform: uppercase;

    &.active {
      border-color: #28a745;
      color: #28a745;
    }

    &.inactive {
      border-color: #dc3545;
      color: #dc3545;
    }
  }

  h3 {
    margin-bottom: 0.25em;
  }
`;

const RocketCard = props => (
  <Card>
    <h2>{props.name}</h2>
    {props.active ? (
      <span className="status active">Status: Active</span>
    ) : (
      <span className="status inactive">Status: Inactive</span>
    )}
    <p>{props.description}</p>
    <h3>Specs</h3>
    <ul>
      <li>Height: {props.height.meters}m</li>
      <li>Diameter: {props.diameter.meters}m</li>
      <li>
        Mass: {props.mass.kg}
        kg
      </li>
      <li>Boosters: {props.boosters}</li>
      <li>Success Rate: {props.success_rate_pct}%</li>
    </ul>
    <h3>Engines</h3>
    <ul>
      <li>Engines: {props.engines.number}</li>
      <li>Type: {props.engines.type}</li>
      <li>Version: {props.engines.version}</li>
      <li>Propellant 1: {props.engines.propellant_1}</li>
      <li>Propellant 2: {props.engines.propellant_2}</li>
    </ul>
    <h3>Payload Weights</h3>
    {props.payload_weights.map(weight => (
      <ul key={'weight-' + weight.id}>
        <li>Name: {weight.name}</li>
        <li>
          Weight: {weight.kg}
          kg
        </li>
      </ul>
    ))}
    <h3>Landing Legs</h3>
    <ul>
      <li>Number: {props.landing_legs.number}</li>
      <li>Material: {props.landing_legs.material}</li>
    </ul>
    <a href={props.wikipedia} className="btn">
      Read About {props.name} on Wikipedia
    </a>
  </Card>
);

export default RocketCard;
