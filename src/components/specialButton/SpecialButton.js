import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './SpecialButton.css';

//TODO:
/// Receives a string prop for botton content
/// Receives a string prop for the link
/// decorated
/// animates on hover
/// accesibility focus decoration 

export default function SpecialButton({text}) {
    const container = useRef(null);
    const backgroundFillRef = useRef(null);
    

    const twitterRef = useRef(null);
    const buttonTween = useRef(null);
    // useEffect(() => {
    //   const ctx = gsap.context((self) => {
    //       backgroundFillRef.current.addEventListener("mouseover", (event) => {
    //         console.log("mouseover")
    //           gsap.to(backgroundFillRef.current, 
    //               {x: 250, duration: 1.5, ease: "power4.inOut"}
    //           );
    //       });
          
    //   }, container); // <- Scope!
     
    //   return () => ctx.revert(); // <- Cleanup!
    // }, []);
    useEffect(() => {
      buttonTween.current = gsap.to(backgroundFillRef.current, {
        x: 250, duration: 1.5, ease: "power4.inOut",
        paused: true
      });
    }, []);
    const onMouseEnterHandler = () => {
      buttonTween.current.play();
    };
    const onMouseLeaveHandler = () => {
      buttonTween.current.reverse();
    };
  return (
     <div className='btn' ref={container} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <span id="svgContainer" ref={backgroundFillRef}>
        <svg viewBox="0 0 301 60">
          <ellipse cx="150.5" cy="30" rx="150.5" ry="30"/>
        </svg>
      </span>
      <span className="text-link">{text}</span>
     </div>
  );
}

