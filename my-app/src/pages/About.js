import React from 'react';
import FeatureSectionSmall from '../components/FeatureSectionSmall';
import { navLinks } from '../components/linksData'; 
import { Link } from 'react-router-dom';

const About = ({ readElement }) => {

  // Find "About MeitY" section
  const aboutMeity = navLinks.find((link) => link.name === 'About MeitY');

  return (
    <div className="container my-5" role="main" aria-labelledby="about-meity-title">
      <div className='row'>
        <div className='col-4'>
            <FeatureSectionSmall />
        </div>
        <div className='col-8'>
            <h2 id="about-meity-title">About MeitY</h2>
            <p>The Ministry of Electronics and Information Technology (MeitY) is responsible for promoting e-Governance, digital services, and fostering IT development in India.</p>

            <div className="feature-section container my-4">
              <div className="row row-cols-sm-1 row-cols-md-4 g-3">
                {aboutMeity.children.map((child, index) => (
                  <div key={index} className="col d-flex">
                    <div className="card h-100 w-100 text-dark p-3 d-flex flex-column justify-content-between">
                      <Link 
                        to={child.path} 
                        className="stretched-link"
                        tabIndex="0" 
                        aria-label={child.name}
                        onMouseEnter={() => readElement(child.name)}
                      >
                        <h5 className="text-center">{child.name}</h5>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>  
      </div>
    </div>
  );
};

export default About;
