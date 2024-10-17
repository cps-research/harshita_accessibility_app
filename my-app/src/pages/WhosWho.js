import React from 'react';

const WhosWho = ({ readElement }) => {
  return (
    <div role="main">
      <h2
        tabIndex="0"
        onMouseEnter={() => readElement("Whos Who Ministry of Electronics & Information Technology")}
      >
        Whos Who Ministry of Electronics & Information Technology
      </h2>
      <p
        tabIndex="0"
        onMouseEnter={() => readElement("Details Who's Who MeitY go here.")}
      >
        Details Who's Who MeitY go here.
      </p>
    </div>
  );
};

export default WhosWho;
