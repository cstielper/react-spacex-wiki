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

const CapsuleCard = props => (
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
      <li>Crew Capacity: {props.crew_capacity}</li>
      <li>Height w/Trunk: {props.height_w_trunk.meters}m</li>
      <li>Diameter: {props.diameter.meters}m</li>
      <li>
        Sidewall Angle: {props.sidewall_angle_deg}
        &deg;
      </li>
      <li>Orbit Duration: {props.orbit_duration_yr} years</li>
    </ul>
    <h3>Heat Shield</h3>
    <ul>
      <li>Material: {props.heat_shield.material}</li>
      <li>Size: {props.heat_shield.size_meters}m</li>
      <li>
        Temperature: {props.heat_shield.temp_degrees}
        &deg;
      </li>
      <li>Partner: {props.heat_shield.dev_partner}</li>
    </ul>
    <h3>Thrusters</h3>
    {props.thrusters.map(thruster => (
      <ul key={'thruster-' + thruster.type}>
        <li>Type: {thruster.type}</li>
        <li>Pods: {thruster.pods}</li>
        <li>Fuel 1: {thruster.fuel_1}</li>
        <li>Fuel 2: {thruster.fuel_2}</li>
        <li>
          Thrust: {thruster.thrust.kN}
          kN
        </li>
      </ul>
    ))}
    <h3>Payload</h3>
    <ul>
      <li>
        Launch Payload Mass: {props.launch_payload_mass.kg}
        kg
      </li>
      <li>
        Launch Payload Volume: {props.launch_payload_vol.cubic_meters}m
        <sup>3</sup>
      </li>
      <li>
        Return Payload Mass: {props.return_payload_mass.kg}
        kg
      </li>
      <li>
        Return Payload Volume: {props.return_payload_vol.cubic_meters}m
        <sup>3</sup>
      </li>
    </ul>
    <a href={props.wikipedia} className="btn">
      Read About {props.name} on Wikipedia
    </a>
  </Card>
);

export default CapsuleCard;
