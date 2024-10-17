import React from 'react';

const Notifications = ({ readElement }) => {
  return (
    <div role="main" aria-labelledby="notifications-title">
      <h2 id="notifications-title" tabIndex="0" onMouseEnter={() => readElement('Notifications Ministry of Electronics & Information Technology')}>
        Notifications Ministry of Electronics & Information Technology
      </h2>
      <p tabIndex="0" onMouseEnter={() => readElement('Details Notifications MeitY go here.')}>Details Notifications MeitY go here.</p>
    </div>
  );
};

export default Notifications;
