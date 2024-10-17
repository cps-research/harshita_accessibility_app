import React from 'react';

const WebInfoManager = ({ readElement }) => {
  return (
    <div role="main">
      <h2
        tabIndex="0"
        onMouseEnter={() => readElement("Web Info Manager - Ministry of Electronics & Information Technology")}
      >
        Web Info Manager - Ministry of Electronics & Information Technology
      </h2>
      <p
        tabIndex="0"
        onMouseEnter={() => readElement("Details WebInfoManager MeitY go here.")}
      >
        Details WebInfoManager MeitY go here.
      </p>
    </div>
  );
};

export default WebInfoManager;
