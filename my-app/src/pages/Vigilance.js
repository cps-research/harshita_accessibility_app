import React from 'react';

const Vigilance = ({ readElement }) => {
  return (
    <div role="main">
      <h2
        tabIndex="0"
        onMouseEnter={() => readElement("Vigilance Ministry of Electronics & Information Technology")}
      >
        Vigilance Ministry of Electronics & Information Technology
      </h2>
      <p
        tabIndex="0"
        onMouseEnter={() => readElement("Details Vigilance MeitY go here.")}
      >
        Details Vigilance MeitY go here.
      </p>
    </div>
  );
};

export default Vigilance;
