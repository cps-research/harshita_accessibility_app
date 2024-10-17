import React from 'react';

const VisionMission = ({ readElement }) => {
  return (
    <div role="main" aria-labelledby="vision-mission-tittle">
      <h2 id="vision-mission-title" tabIndex="0" onMouseEnter={() => readElement('Vision Mission Ministry of Electronics & Information Technology')}>
        Vision Mission Ministry of Electronics & Information Technology</h2>
        <p tabIndex="0" onMouseEnter={() => readElement('Details Section 69A MeitY go here.')}>
          Details VisionMission MeitY go here.</p>
    </div>
  );
};

export default VisionMission;
