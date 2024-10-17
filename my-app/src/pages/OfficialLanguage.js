import React from 'react';

const OfficialLanguage = ({ readElement }) => {
  return (
    <div role="main">
      <h2
        tabIndex="0"
        onMouseEnter={() => readElement("Official Language - Ministry of Electronics & Information Technology")}
      >
        Official Language - Ministry of Electronics & Information Technology
      </h2>
      <p
        tabIndex="0"
        onMouseEnter={() => readElement("Details Official Language MeitY go here.")}
      >
        Details Official Language MeitY go here.
      </p>
    </div>
  );
};

export default OfficialLanguage;
