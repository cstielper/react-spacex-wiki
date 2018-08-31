import React from 'react';
import styled from 'styled-components';

const Card = styled.section``;

const RocketCard = props => (
  <Card className="card">
    <div>
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
    </div>
  </Card>
);

export default RocketCard;
