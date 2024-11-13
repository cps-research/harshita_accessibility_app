import React from 'react';
import FeatureSectionSmall from '../components/FeatureSectionSmall';
// import Badge from 'react-bootstrap/Badge'; // Import Badge

const PressReleases = ({ readElement }) => {
  
    const releases = [
      {
        id: "PR001",
        title: "NeGD announces UMANG's integration with DigiLocker",
        link: "/pdfs/press-release-1.pdf",
        size:"1.14 MB",
        date: "October 10, 2024",
        isAccessible: true,
      },
      {
        id: "PR002",
        title: "Press Note and Proposed draft Amendment to IT Rules, 2021",
        link: "/pdfs/press-release-2.pdf",
        size:"846.51 KB",
        date: "June 06, 2022",
        isAccessible: false,
      },
      {
        id: "PR003",
        title: "Cabinet approves Production Linked Incentive Scheme for IT Hardware",
        link: "/pdfs/press-release-3.pdf",
        size:"5.35 MB",
        date: "February 24, 2021",
        isAccessible: true,
      },
      {
        id: "PR004",
        title: 'Honourable Minister Shri Ravi Shankar Prasad launches “Swadeshi Microprocessor Challenge”',
        link: "/pdfs/press-release-4.pdf",
        size:"691.57 KB",
        date: "August 18, 2020",
        isAccessible: false,
      },
        // Add more press releases here
      ];
    
      
    //   return (
    // <div className="container my-5">
    //   <div className="row">
    //     <div className="col-4">
    //       <FeatureSectionSmall readElement={readElement} />
    //     </div>
    //     <div className="col-8">
    //       <h2 tabIndex="0" onMouseEnter={() => readElement("Press Releases section")}>
    //         Press Releases
    //       </h2>
    //       <ul>
    //         {releases.map((release, index) => (
    //           <li key={index}>
    //             <a
    //               href={release.link}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               tabIndex="0"
    //               onMouseEnter={() => readElement(release.title)}
    //               >
    //               {release.title}
    //             </a>
    //             <span> - Posted on: {release.date}</span>



                {/* Accessibility Tag */}
                {/* <span 
                  style={{
                    marginLeft: '10px',
                    padding: '4px 8px',
                    color: '#fff',
                    borderRadius: '4px',
                    backgroundColor: release.isAccessible ? '#60c128' : '#ff4d4d'
                  }}
                  aria-label={release.isAccessible ? 'Accessible PDF' : 'Non-Accessible PDF'}
                >
                  {release.isAccessible ? 'Accessible' : 'Non-Accessible'}
                </span> */}


                                
//                 {release.isAccessible ? (
//                     <span className="badge bg-success ms-2">Accessible</span>
//                 ) : (
//                     <span className="badge bg-danger ms-2">Inaccessible</span>
//                 )}

//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };



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
              <table className="table table-bordered table-striped">
                  <thead>
                      <tr>
                          <th scope="col">Document ID</th>
                          <th scope="col">Title</th>
                          <th scope="col">Date</th>
                          <th scope="col">Size</th>
                          <th scope="col">Accessibility Status</th>
                      </tr>
                  </thead>
                  <tbody>
                      {releases.map((release, index) => (
                          <tr key={index}>
                              <td className="fw-bold">{release.id}</td>
                              <td>
                                  <a
                                      href={release.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      tabIndex="0"
                                      onMouseEnter={() => readElement(release.title)}
                                  >
                                      {release.title}
                                  </a>
                              </td>
                              <td>{release.date}</td>
                              <td>{release.size}</td>
                              <td>
                                  {release.isAccessible ? (
                                      <span className="badge bg-success">Accessible</span>
                                  ) : (
                                      <span className="badge bg-danger">Inaccessible</span>
                                  )}
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
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