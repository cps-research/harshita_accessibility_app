import React from 'react';

const AboutContent = ({ readElement }) => {
  return (
    <div className="container my-5">
      <h2 onMouseEnter={() => readElement("About Us")} tabindex="0">About Us</h2>
      <p onMouseEnter={() => readElement("The Ministry of Electronics and Information Technology is responsible for promoting e-Governance, digital services, and fostering IT development in India.")} tabindex="0">
        The Ministry of Electronics and Information Technology (MeitY) is responsible for promoting e-Governance, enabling efficient and transparent delivery of public services, and fostering the growth of the Information Technology sector in India.
      </p>
      <p onMouseEnter={() => readElement("MeitY focuses on initiatives such as Digital India, cybersecurity, and fostering IT innovation in the country.")} tabindex="0">
        MeitY focuses on various key initiatives such as Digital India, cybersecurity, IT policies, and promoting startups and innovation to drive the country towards a more digitally empowered society.
      </p>
    </div>
  );
};

export default AboutContent;
