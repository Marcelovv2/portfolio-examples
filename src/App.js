import React, { useEffect, useState, useContext } from 'react';
import MovingBanner from './components/movingBanner/MovingBanner';
import FallingObjects from './components/fallingObjects/FallingObjects';
import LogoBanner from './components/logoBanner/LogoBanner';
import CallToAction from './components/callToAction/CallToAction';
import AttentionGrabber from './components/attentionGrabber/AttentionGrabber';
import ReinforcementContent from './components/reinforcementContent/ReinforcementContent';
import './App.css';
import atlantisLogo from './assets/atlantisLogo.png';
import logo2 from './assets/logo.svg';
import mango from "./assets/mango.png";
import orange from "./assets/orange.png";
import slices from "./assets/slices.png";
import lettuce from "./assets/lettucePackage.png";
import mixGreens from "./assets/GreenMix.png";
import miniGreens from "./assets/miniGreens.png"
import herb1 from "./assets/herb1.png";
import herb2 from "./assets/herb2.png";
import herb3 from "./assets/herb3.png";
import fork1 from "./assets/fork1.png";


const mainText = "ATLANTIS FARMS IS: HEALTH, COMMUNITY, SCIENCE.";
const secondaryText = "Aliqua sit eiusmod nisi exercitation amet id incididunt mollit velit magna. Aliqua sit eiusmod nisi exercitation amet id incididunt."


function App() {
  const [documentLoaded, setDocumentLoaded] = useState(false);
  function onPageLoad(from) {
    console.log("loaded from " + from);
    setDocumentLoaded(true)
  }
  useEffect(() => {
    // Check if the page has already loaded
    // the one with document works on safari and firefox
    if(documentLoaded === false){
        console.log("documentLoaded is", documentLoaded)
      if (document.readyState === 'complete') {
        onPageLoad("document");
      } else {
        window.addEventListener('load', onPageLoad("from within else"), null);
        // Remove the event listener when component unmounts
        return () => window.removeEventListener('load', onPageLoad);
      }
    }

    return () => {
      //window.removeEventListener('pointermove', handleMove);
    };
  }, [documentLoaded]);
  return (
    <div className="App">
      <MovingBanner 
      section1={"Fresh"} 
      section2={"Healthy"}
      />
      <div id="mainBannerContainer">
        <FallingObjects 
          image1={mango} 
          image2={orange} 
          image3={herb2} 
        />
        <LogoBanner logo={atlantisLogo} loaded={documentLoaded}/>
      </div>
      <MovingBanner 
      section1={"Eat"} 
      section2={"Local"}
      />

      {/* <MovingBanner section1={"#MovingBanner"} section2={logo2}/> */}
      <div id="middleContainer">
        <CallToAction 
          mainText={mainText}
          secondaryText={secondaryText}
          pulseImage={fork1}
        />
        <AttentionGrabber 
          image1={herb1} 
          image2={herb2} 
          image3={herb3}
          className={"backgroundMarble"}
          text={"Many Options!"}
        />
      </div>

      <ReinforcementContent 
        image1={lettuce} 
        image2={mixGreens} 
        image3={miniGreens}
      /> 


    </div>
  );
}

export default App;
