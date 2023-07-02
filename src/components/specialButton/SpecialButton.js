import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './SpecialButton.css';

// Receives a string prop for botton content
// Receives a string prop for the link
// Receives a string for a class
// decorated
// animates on hover
// accesibility focus decoration 

export default function SpecialButton({text, link, className}) {
    const backgroundFillRef = useRef(null);
    const buttonTween = useRef(null);

    useEffect(() => {
      buttonTween.current = gsap.to(backgroundFillRef.current, {
        x: 350, y: -20, duration: 0.75, ease: "power4.inOut",
        paused: true
      });
    }, []);
    const onMouseEnterHandler = () => {
      buttonTween.current.play();
    };
    const onMouseLeaveHandler = () => {
      buttonTween.current.reverse();
    };
    const onClickHandler = () => {
      window.open(link, "_self");
    };
  return (
     <button className={"btn" + " " + className} onClick={onClickHandler} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <span id="svgContainer" ref={backgroundFillRef}>
        <svg viewBox="0 0 301 60">
          <ellipse cx="150.5" cy="30" rx="150.5" ry="30"/>
        </svg>
      </span>
      <span className="text-link">{text}</span>
     </button>

     
  );
}

