import React from 'react';

const ActsRules = ({ readElement }) => {
  return (
    <div role="main">
      <h2
        tabIndex="0"
        onMouseEnter={() => readElement("Acts Rules Ministry of Electronics & Information Technology")}
      >
        Acts Rules Ministry of Electronics & Information Technology
      </h2>
      <p
        tabIndex="0"
        onMouseEnter={() => readElement("Details Acts Rules MeitY go here.")}
      >
        Details Acts Rules MeitY go here.
      </p>
    </div>
  );
};

export default ActsRules;
