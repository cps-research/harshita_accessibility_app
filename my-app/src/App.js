import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSpeechSynthesis } from 'react-speech-kit'; // Import the speech synthesis hook

import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer';
import ScrollNotifier from './components/ScrollNotifier';

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Groups from './pages/Groups';
import Organizations from './pages/Organizations';
import RTI from './pages/RTI';
import Notifications from './pages/Notifications';
import Section69A from './pages/Section69A';

import PressReleases from './pages/PressRelease';
import OfficeMemorandum from './pages/OfficeMemorandum';

// Submenu components
import VisionMission from './pages/VisionMission';
import OrgChart from './pages/OrgChart';
import Functions from './pages/Functions';
import WhosWho from './pages/WhosWho';
import OfficialLanguage from './pages/OfficialLanguage';
import CitizensCharter from './pages/CitizensCharter';
import Vigilance from './pages/Vigilance';
import ActsRules from './pages/ActsRules';
import PoliciesGuidelines from './pages/PoliciesGuidelines';
import SchemesServices from './pages/SchemesServices';
import IntegratedFinances from './pages/IntegratedFinances.js'; 
import PerformanceManagement from './pages/PerformanceManagement';
import ChiefController from './pages/ChiefController';
import WebInfoManager from './pages/WebInfoManager';

const App = () => {
  const [isSpeechOn, setIsSpeechOn] = useState(false); // Toggle state
  const { speak, cancel } = useSpeechSynthesis();
  const [currentSpokenText, setCurrentSpokenText] = useState("");

  const handleToggleSpeech = () => {
    setIsSpeechOn((prev) => !prev);
    if (!isSpeechOn) {
      speak({ text: 'Text-to-speech is now turned on.' });
    } else {
      cancel(); // Stop any ongoing speech
    }
  };

  // Function to handle speech on a specific element
  const readElement = (text) => {
    if (isSpeechOn) {
      if (currentSpokenText) {
        cancel(); // Stop previous speech
      }
      speak({ text });
      setCurrentSpokenText(text); // Update the current spoken text
    }
  };

  return (
    <Router>
      <div>
        <Header readElement={readElement} /> {/* Include the Header with navigation links */}

        {/* Toggle Button for Speech */}
        <button 
          onClick={handleToggleSpeech} 
          aria-pressed={isSpeechOn} // ARIA attribute
          role="switch" // ARIA role
          tabIndex="0" // Tabindex for keyboard focus
          style={{
            position: 'fixed', 
            bottom: '40px', 
            // border-radius: '12px',
            right: '10px', 
            // padding:'20px',
            zIndex: '1000',
            padding: '10px',
            backgroundColor: isSpeechOn ? '#60c128' : '#ccc',
            color: '#000'
          }}
        >
          {isSpeechOn ? 'Turn Off Speech' : 'Turn On Speech'}
        </button>

        {/* Routes for each page */}
        <Routes>
          <Route path="/" element={
            <Home 
              readElement={readElement} 
              onMouseEnter={() => readElement('Welcome to the homepage!')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/about" element={
            <About 
              readElement={readElement} 
              onMouseEnter={() => readElement('Learn more about us.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/groups" element={
            <Groups 
              readElement={readElement} 
              onMouseEnter={() => readElement('Explore our groups.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/organizations" element={
            <Organizations 
              readElement={readElement} 
              onMouseEnter={() => readElement('Learn about our organizations.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/rti" element={
            <RTI 
              readElement={readElement} 
              onMouseEnter={() => readElement('Information about RTI.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/notifications" element={
            <Notifications 
              readElement={readElement} 
              onMouseEnter={() => readElement('View our latest notifications.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/section69a" element={
            <Section69A 
              readElement={readElement} 
              onMouseEnter={() => readElement('Details on Section 69A.')}
              onMouseLeave={() => cancel()}
            />
          } />

          <Route path="/press-release" element={
            <PressReleases 
              readElement={readElement} 
              onMouseEnter={() => readElement('Check our press releases.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/office-memorandum" element={
            <OfficeMemorandum 
              readElement={readElement} 
              onMouseEnter={() => readElement('Read our office memorandum.')}
              onMouseLeave={() => cancel()}
            />
          } />

          {/* Submenu Routes */}
          <Route path="/vision-mission" element={
            <VisionMission 
              readElement={readElement} 
              onMouseEnter={() => readElement('Our vision and mission.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/org-chart" element={
            <OrgChart 
              readElement={readElement} 
              onMouseEnter={() => readElement('View our organizational chart.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/functions" element={
            <Functions 
            readElement={readElement} 
            onMouseEnter={() => readElement('Explore our functions.')}
            onMouseLeave={() => cancel()}
            />
          } />
          
          
          <Route path="/whos-who" element={
            <WhosWho 
              readElement={readElement} 
              onMouseEnter={() => readElement('Find out who is who.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/official-language" element={
            <OfficialLanguage 
              readElement={readElement} 
              onMouseEnter={() => readElement('Details on official languages.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/citizens-charter" element={
            <CitizensCharter 
              readElement={readElement} 
              onMouseEnter={() => readElement('Learn about our citizen charter.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/vigilance" element={
            <Vigilance 
              readElement={readElement} 
              onMouseEnter={() => readElement('Information on vigilance.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/acts-rules" element={
            <ActsRules 
              readElement={readElement} 
              onMouseEnter={() => readElement('Explore our acts and rules.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/policies-guidelines" element={
            <PoliciesGuidelines 
              readElement={readElement} 
              onMouseEnter={() => readElement('View our policies and guidelines.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/schemes-services" element={
            <SchemesServices 
              readElement={readElement} 
              onMouseEnter={() => readElement('Explore our schemes and services.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/integrated-finances" element={
            <IntegratedFinances 
              readElement={readElement} 
              onMouseEnter={() => readElement('Learn about our integrated finances.')}
              onMouseLeave={() => cancel()}
              
            />
          } />
          <Route path="/performance-management" element={
            <PerformanceManagement 
              readElement={readElement} 
              onMouseEnter={() => readElement('Understand our performance management.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/chief-controller" element={
            <ChiefController 
              readElement={readElement} 
              onMouseEnter={() => readElement('Details on the chief controller.')}
              onMouseLeave={() => cancel()}
            />
          } />
          <Route path="/web-info-manager" element={
            <WebInfoManager 
              readElement={readElement} 
              onMouseEnter={() => readElement('Information on the web info manager.')}
              onMouseLeave={() => cancel()}
            />
          } />
        </Routes>

        {/* Only notify the user when speech is on */}
        <ScrollNotifier isSpeechOn={isSpeechOn} readElement={readElement} />
        <Footer readElement={readElement} />

      </div>
    </Router>
  );
};

export default App;
