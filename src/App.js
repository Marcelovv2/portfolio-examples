import React from 'react';
import MovingBanner from './components/movingBanner/MovingBanner';
import FallingObjects from './components/fallingObjects/FallingObjects';
import LogoBanner from './components/logoBanner/LogoBanner';
import SpecialButton from './components/specialButton/SpecialButton';
import './App.css';
import logo from './assets/logo.png';
import logo2 from './assets/logo.svg';
import mango from "./assets/mango.png";
import orange from "./assets/orange.png";
import slices from "./assets/slices.png";
function App() {
  return (
    <div className="App">
      {/* <MovingBanner section1={"#MovingBanner"} section2={logo2}/>
      <FallingObjects 
        image1={mango} 
        image2={orange} 
        image3={slices} 
      /> */}
      <SpecialButton text={"Follow Along"}/>
    </div>
  );
}

export default App;
