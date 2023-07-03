import React from 'react';
import MovingBanner from './components/movingBanner/MovingBanner';
import FallingObjects from './components/fallingObjects/FallingObjects';
import LogoBanner from './components/logoBanner/LogoBanner';
import SpecialButton from './components/specialButton/SpecialButton';
import CallToAction from './components/callToAction/CallToAction';
import AttentionGrabber from './components/attentionGrabber/AttentionGrabber';
import './App.css';
import logo from './assets/logo.png';
import logo2 from './assets/logo.svg';
import mango from "./assets/mango.png";
import orange from "./assets/orange.png";
import slices from "./assets/slices.png";
import marble from "./assets/marbleBackground.jpg";
const mainText = "THE VIRTUAL BASKETBALL AND SNEAKER EXPERIENCE WHERE YOU CAN WIN BIG!";
const secondaryText = "We issue challenges, you use your basketball skills and knowledge to win. That simple. All you have to do is stay locked in on @FootLocker."
function App() {
  return (
    <div className="App">
      {/* <MovingBanner section1={"#MovingBanner"} section2={logo2}/>
      <FallingObjects 
        image1={mango} 
        image2={orange} 
        image3={slices} 
      /> */}
      <AttentionGrabber 
        image1={orange} 
        image2={mango} 
        image3={slices}
        className={"backgroundMarble"}
        text={"Pay Attention!"}
      />
    </div>
  );
}

export default App;
