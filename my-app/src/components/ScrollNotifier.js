import React, { useEffect } from 'react';

const ScrollNotifier = ({ isSpeechOn, readElement }) => {

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // User has scrolled to the bottom of the page
      if (isSpeechOn) {
        readElement('You have reached the bottom of the page.');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSpeechOn]); // Re-run the effect if isSpeechOn changes

  return null;
};

export default ScrollNotifier;


// import React, { useEffect, useState } from 'react';

// const ScrollNotifier = () => {
//   const [isBottom, setIsBottom] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight
//       ) {
//         setIsBottom(true); // User reached the bottom
//       } else {
//         setIsBottom(false); // User is not at the bottom
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll); // Clean up the event listener
//     };
//   }, []);

//   return (
//     <div>
//       {isBottom && (
//         <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'lightblue', textAlign: 'center' }}>
//           <p>You’ve reached the bottom of the page!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScrollNotifier;
