import React from 'react';

const OrgChart = ({ readElement }) => {
  return (
    <div role="main" aria-labelledby="organization-title">
      <h2 id="organization-title" tabIndex="0" onMouseEnter={() => readElement('Organization Chart Ministry of Electronics & Information Technology')}>
        Organization Chart Ministry of Electronics & Information Technology
        </h2>
      <p tabIndex="0" onMouseEnter={() => readElement('Details OrgChart MeitY go here.')}>Details OrgChart MeitY go here.</p>
    </div>
  );
};

export default OrgChart;
