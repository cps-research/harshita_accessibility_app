import React from 'react';

const SchemesServices = ({ readElement }) => {
  return (
    <div role="main">
      <h2
        tabIndex="0"
        onMouseEnter={() => readElement("Schemes Services - Ministry of Electronics & Information Technology")}
      >
        Schemes Services - Ministry of Electronics & Information Technology
      </h2>
      <p
        tabIndex="0"
        onMouseEnter={() => readElement("Details Schemes Services - MeitY go here.")}
      >
        Details Schemes Services - MeitY go here.
      </p>
    </div>
  );
};

export default SchemesServices;
