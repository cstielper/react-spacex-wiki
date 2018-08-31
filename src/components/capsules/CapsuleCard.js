import React from 'react';
import styled from 'styled-components';

const Card = styled.section``;

const CapsuleCard = props => (
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
    </div>
  </Card>
);

export default CapsuleCard;
