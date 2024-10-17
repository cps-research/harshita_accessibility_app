import React from 'react';

const IntegratedFinances = ({ readElement }) => {
  return (
    <div role="main" aria-labelledby="organization-title">
      <h2
        id="organization-title"
        tabIndex="0"
        onMouseEnter={() => readElement("Integrated Finances Ministry of Electronics & Information Technology")}
      >
        Integrated Finances Ministry of Electronics & Information Technology
      </h2>
      <p
        tabIndex="0"
        onMouseEnter={() => readElement("Details Integrated Finances MeitY go here.")}
      >
        Details OrgChart MeitY go here.
      </p>
    </div>
  );
};

export default IntegratedFinances;
