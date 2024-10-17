import React from 'react';

const Groups = ({ readElement }) => {
  return (
    <div role="main" aria-labelledby="groups-title">
      <h2 id="groups-title" tabIndex="0" onMouseEnter={() => readElement('Groups Ministry of Electronics & Information Technology')}>
        Groups Ministry of Electronics & Information Technology
      </h2>
      <p tabIndex="0" onMouseEnter={() => readElement('Details Groups MeitY go here.')}>Details Groups MeitY go here.</p>
    </div>
  );
};

export default Groups;
