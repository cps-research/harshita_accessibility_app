import React from 'react';

const Organizations = ({ readElement }) => {
  return (
    <div role="main" aria-labelledby="organizations-title">
      <h2 id="organizations-title" tabIndex="0" onMouseEnter={() => readElement('Organizations Ministry of Electronics & Information Technology')}>
        Organizations Ministry of Electronics & Information Technology
      </h2>
      <p tabIndex="0" onMouseEnter={() => readElement('Details Organizations MeitY go here.')}>Details Organizations MeitY go here.</p>
    </div>
  );
};

export default Organizations;
