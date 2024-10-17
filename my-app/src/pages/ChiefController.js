import React from 'react';

const ChiefController = ({ readElement }) => {
  return (
    <div role="main">
      <h2
        tabIndex="0"
        onMouseEnter={() => readElement("Chief Controller Ministry of Electronics & Information Technology")}
      >
        Chief Controller Ministry of Electronics & Information Technology
      </h2>
      <p
        tabIndex="0"
        onMouseEnter={() => readElement("Details Chief Controller MeitY go here.")}
      >
        Details Chief Controller MeitY go here.
      </p>
    </div>
  );
};

export default ChiefController;
