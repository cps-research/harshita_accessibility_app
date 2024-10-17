import React from 'react';

const Functions = ({ readElement }) => {
  return (
    <div>
      <h2
        tabIndex={0} 
        onMouseEnter={() => readElement('Functions Ministry of Electronics & Information Technology')} 
        onFocus={() => readElement('Functions Ministry of Electronics & Information Technology')}
      >Functions Ministry of Electronics & Information Technology</h2>
      <p
        tabIndex={0} 
        onMouseEnter={() => readElement('Details Functions MeitY go here.')} 
        onFocus={() => readElement('Details Functions MeitY go here.')}
      >Details Functions MeitY go here.</p>
    </div>
  );
};

export default Functions;


