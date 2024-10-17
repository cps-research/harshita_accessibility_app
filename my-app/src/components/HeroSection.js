import React from 'react';
import CarouselBootstrap from './CarouselBootstrap';

const HeroSection = ({ readElement }) => {
  return (
    <div className="hero-section" aria-label="Main Banner Section" tabindex="0">
      <CarouselBootstrap readElement={readElement} tabindex="0"/>
      <h1 onMouseEnter={() => readElement("Welcome to MeitY")} tabindex="0">Welcome to MeitY</h1>
      <p onMouseEnter={() => readElement("Empowering India's digital future through e-Governance, IT development, and innovation.")} tabindex="0">
        Empowering India's digital future through e-Governance, IT development, and innovation.
      </p>
    </div>
  );
};

export default HeroSection;



// import React from 'react';
// import CarouselBootstrap from './CarouselBootstrap';

// const HeroSection = ({ readElement }) => {
//   return (
//     // <div className="jumbotron jumbotron-fluid bg-primary text-white text-center py-5">  
//     //   <div className="container">
//     //     <h1 className="display-4">Welcome to MeitY</h1>
//     //     <p className="lead">Ministry of Electronics & Information Technology, Government of India</p>
//     //   </div>
//     // </div>
//     <CarouselBootstrap readElement={readElement}/>
//   );
// };

// export default HeroSection;



// import React from 'react';

// const HeroSection = () => {
//   return (
//     <div className="hero-section bg-dark text-white d-flex align-items-center">
//       <div className="container">
//         <h1>Section 69 A of IT Act</h1>
//       </div>
//       <img src="path-to-image/books.png" alt="Books" className="hero-image" />
//       {/* Optional: Carousel navigation buttons */}
//       <button className="carousel-control-prev">‹</button>
//       <button className="carousel-control-next">›</button>
//     </div>
//   );
// };

// export default HeroSection;
