import React from 'react';
import FeatureSectionSmall from '../components/FeatureSectionSmall';

const PressReleases = ({ readElement }) => {
  
    const releases = [
      {
        title: "NeGD announces UMANG's integration with DigiLocker",
        link: "/pdfs/press-release-1.pdf", // Change to local link
        date: "October 10, 2024",
      },
      {
        title: "Press Note and Proposed draft Amendment to IT Rules, 2021",
        link: "/pdfs/press-release-2.pdf", // Change to local link
        date: "June 06, 2022",
      },
      {
        title: "Cabinet approves Production Linked Incentive Scheme for IT Hardware",
        link: "/pdfs/press-release-3.pdf", // Change to local link
        date: "February 24, 2021",
      },
      {
          title: 'Honourable Minister Shri Ravi Shankar Prasad launches “Swadeshi Microprocessor Challenge” to realize the ambition of self-reliance and a momentous stride towards “Atmanirbhar Bharat”',
          link: "/pdfs/press-release-4.pdf", // Change to local link
          date: " August 18, 2020",
        },
        // Add more press releases here
      ];
    
      
      return (
        <div className="container my-5">
      <div className="row">
        <div className="col-4">
          <FeatureSectionSmall readElement={readElement} />
        </div>
        <div className="col-8">
          <h2 tabIndex="0" onMouseEnter={() => readElement("Press Releases section")}>
            Press Releases
          </h2>
          <ul>
            {releases.map((release, index) => (
              <li key={index}>
                <a
                  href={release.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex="0"
                  onMouseEnter={() => readElement(release.title)}
                  >
                  {release.title}
                </a>
                <span> - Posted on: {release.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PressReleases;

// import React from 'react';
// import FeatureSectionSmall from '../components/FeatureSectionSmall';

// const PressReleases = () => {
//   const releases = [
//     {
//       title: "NeGD announces UMANG's integration with DigiLocker",
//       link: "/pdfs/press-release-1.pdf", // Change to local link
//       date: "October 10, 2024",
//     },
//     {
//       title: "Press Note and Proposed draft Amendment to IT Rules, 2021",
//       link: "/pdfs/press-release-2.pdf", // Change to local link
//       date: "June 06, 2022",
//     },
//     {
//         title: "Cabinet approves Production Linked Incentive Scheme for IT Hardware",
//         link: "/pdfs/press-release-3.pdf", // Change to local link
//         date: "February 24, 2021",
//       },
//       {
//         title: 'Honourable Minister Shri Ravi Shankar Prasad launches “Swadeshi Microprocessor Challenge” to realize the ambition of self-reliance and a momentous stride towards “Atmanirbhar Bharat”',
//         link: "/pdfs/press-release-4.pdf", // Change to local link
//         date: " August 18, 2020",
//       },
//     // Add more press releases here
//   ];
  
  
//   return (
//     <div className="container my-5">
//       <div className='row'>
//         <div className='col-4'>
//             <FeatureSectionSmall />
//         </div>
//         <div className='col-8'>
//             <h2>Press Releases</h2>
//             <ul>
//                 {releases.map((release, index) => (
//                   <li key={index}>
//                     <a
//                     href={release.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     >
//                     {release.title}
//                     </a>
//                     <span> - Posted on: {release.date}</span>
//                 </li>
//                 ))}
//             </ul>
//         </div>  
//       </div>
//       {/* <h2>About MeitY</h2>
//       <p>The Ministry of Electronics and Information Technology (MeitY) is responsible for promoting e-Governance, digital services, and fostering IT development in India.</p> */}
//     </div>
//         );
//       };
      
//       export default PressReleases;
      

      
      //   return (
      //     <div>
      //       <h2>Press Releases</h2>
      //       <ul>
      //         {releases.map((release, index) => (
      //           <li key={index}>
      //             <a
      //               href={release.link}
      //               target="_blank"
      //               rel="noopener noreferrer"
      //             >
      //               {release.title}
      //             </a>
      //             <span> - Posted on: {release.date}</span>
      //           </li>
      //         ))}
      //       </ul>
      //     </div>
      //   );
      // export default PressReleases;