import React from 'react';

const RTI = ({ readElement }) => {
  return (
    <div role="main" aria-labelledby="rti-title">
      <h2 id="rti-title" tabIndex="0" onMouseEnter={() => readElement('RTI Ministry of Electronics & Information Technology')}>
        RTI Ministry of Electronics & Information Technology
      </h2>
      <p tabIndex="0" onMouseEnter={() => readElement('Details RTI MeitY go here.')}>Details RTI MeitY go here.</p>
    </div>
  );
};

export default RTI;
