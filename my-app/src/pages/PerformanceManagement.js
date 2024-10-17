import React from 'react';

const PerformanceManagement = ({ readElement }) => {
  return (
    <div role="main">
      <h2
        tabIndex="0"
        onMouseEnter={() => readElement("Performance Management Ministry of Electronics & Information Technology")}
      >
        Performance Management Ministry of Electronics & Information Technology
      </h2>
      <p
        tabIndex="0"
        onMouseEnter={() => readElement("Details Performance Management MeitY go here.")}
      >
        Details Performance Management MeitY go here.
      </p>
    </div>
  );
};

export default PerformanceManagement;
