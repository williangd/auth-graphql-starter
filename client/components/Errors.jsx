import React from 'react';

const Errors = props => (
  <div className="errors">
    {props.errors.map((error, index) => <div key={index}>{error}</div>)}
  </div>
);

export default Errors;
