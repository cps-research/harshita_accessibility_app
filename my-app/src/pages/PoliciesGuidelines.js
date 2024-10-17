import React from 'react';

const PoliciesGuidelines = ({ readElement }) => {
  return (
    <div role="main">
      <h2
        tabIndex="0"
        onMouseEnter={() => readElement("Policies Guidelines - Ministry of Electronics & Information Technology")}
      >
        Policies Guidelines - Ministry of Electronics & Information Technology
      </h2>
      <p
        tabIndex="0"
        onMouseEnter={() => readElement("Details Policies Guidelines - MeitY go here.")}
      >
        Details Policies Guidelines - MeitY go here.
      </p>
    </div>
  );
};

export default PoliciesGuidelines;
