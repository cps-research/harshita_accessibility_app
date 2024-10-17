import React from 'react';

const CitizensCharter = ({ readElement }) => {
  return (
    <div role="main">
      <h2
        tabIndex="0"
        onMouseEnter={() => readElement("Citizens Charter Ministry of Electronics & Information Technology")}
      >
        Citizens Charter Ministry of Electronics & Information Technology
      </h2>
      <p
        tabIndex="0"
        onMouseEnter={() => readElement("Details Citizens Charter MeitY go here.")}
      >
        Details Citizens Charter MeitY go here.
      </p>
    </div>
  );
};

export default CitizensCharter;
