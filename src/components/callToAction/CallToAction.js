import React from 'react';
import { useRef, useEffect } from 'react';
import './CallToAction.css';
import SpecialButton from '../specialButton/SpecialButton';

//TODO:
// Receives a string for the call to action main message
// Receives a string for the call to action secondary message
// Receives an image
// animates image on the back
// 

export default function CallToAction({ backgroundImage, mainText, secondaryText}) {
    const backgroundFillRef = useRef(null);
    const buttonTween = useRef(null);

    useEffect(() => {

    }, []);
  return (
    <div id="callToActionContainer">
        <img id="backgroundImage" src={backgroundImage}/>
        <div id="textContainer">
            <div id="textInnerContainer">
                <span id="mainText">{mainText}</span>
                <span id="secondaryText">{secondaryText}</span>
            </div> 
        </div>
        <SpecialButton className="spcBtnCallToAction" text={"JOIN US"} link={"/JoinUs"}/>
    </div>
     
  );
}

