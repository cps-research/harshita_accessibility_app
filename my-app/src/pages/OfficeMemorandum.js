import React from 'react';
import FeatureSectionSmall from '../components/FeatureSectionSmall';

const OfficeMemorandum = ({ readElement }) => {

    const Memorandum = [
      {
        title: "Office Memorandum - Delegation of power to Additional secretary on behalf of Hon'ble Minister of Electronics and IT to approve notification for declaring any computer resource which directly or indirectly affects the facility of Critical Information Infrastructure",
        link: "/pdfs/MeitY-OM-dated-22.03.2023.pdf", // Change to local link
        size:"1.14 MB",
        // date: "October 10, 2024",
      },
      {
        title: "Office Memorandum - Engagement of 11 Consultants in MeitY",
        link: "/pdfs/OM-2.pdf", // Change to local link
        size:"846.51 KB",
        // date: "October 10, 2024",
      },
      {
        title: "Office Memorandum - Streamlining and Standardising of the Recruitment Process - Scientist C and above",
        link: "/pdfs/OM-3.pdf", // Change to local link
        size:"5.35 MB",
        // date: "October 10, 2024",
      },
      {
        title: "OFFICE MEMORANDUM - Vacancy Circular for the post of Staff Car Driver",
        link: "/pdfs/OM-4.pdf", // Change to local link
        size:"691.57 KB",
        // date: "October 10, 2024",
      },
      // Add more office memorandum here
    ];

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-4">
          <FeatureSectionSmall readElement={readElement} />
        </div>
        <div className="col-8">
          <h2 tabIndex="0" onMouseEnter={() => readElement("Office Memorandum section")}>
            Office Memorandum
          </h2>
          <ul>
            {Memorandum.map((memo, index) => (
              <li key={index}>
                <a
                  href={memo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex="0"
                  onMouseEnter={() => readElement(memo.title)}
                >
                  {memo.title}
                </a>
                <span> - Size: {memo.size}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfficeMemorandum;


// import React from 'react';
// import FeatureSectionSmall from '../components/FeatureSectionSmall';

// const OfficeMemorandum = () => {
//   const Memorandum = [
//     {
//       title: "Office Memorandum - Delegation of power to Additional secretary on behalf of Hon'ble Minister of Electronics and IT to approve notification for declaring any computer resource which directly or indirectly affects the facility of Critical Information Infrastructure",
//       link: "/pdfs/MeitY-OM-dated-22.03.2023.pdf", // Change to local link
//       size:"1.14 MB",
//       // date: "October 10, 2024",
//     },
//     {
//       title: "Office Memorandum - Engagement of 11 Consultants in MeitY",
//       link: "/pdfs/OM-2.pdf", // Change to local link
//       size:"846.51 KB",
//       // date: "October 10, 2024",
//     },
//     {
//       title: "Office Memorandum - Streamlining and Standardising of the Recruitment Process - Scientist C and above",
//       link: "/pdfs/OM-3.pdf", // Change to local link
//       size:"5.35 MB",
//       // date: "October 10, 2024",
//     },
//     {
//       title: "OFFICE MEMORANDUM - Vacancy Circular for the post of Staff Car Driver",
//       link: "/pdfs/OM-4.pdf", // Change to local link
//       size:"691.57 KB",
//       // date: "October 10, 2024",
//     },
//     // Add more office memorandum here
//   ];

// //   return (
// //     <div>
// //       <h2>Press Releases</h2>
// //       <ul>
// //         {releases.map((release, index) => (
// //           <li key={index}>
// //             <a
// //               href={release.link}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               {release.title}
// //             </a>
// //             <span> - Posted on: {release.date}</span>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
  
  
//   return (
//       <div className="container my-5">
//       <div className='row'>
//         <div className='col-4'>
//             <FeatureSectionSmall />
//         </div>
//         <div className='col-8'>
//             <h2>Office Memorandum</h2>
//             <ul>
//                 {Memorandum.map((memo, index) => (
//                     <li key={index}>
//                     <a
//                     href={memo.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     >
//                     {memo.title}
//                     </a>
//                     {/* <span> - Posted on: {release.date}</span> */}
//                     <span> - Size: {memo.size}</span>

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
      
//       export default OfficeMemorandum;

