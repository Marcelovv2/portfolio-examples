import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './LogoBanner.css';

//Does:
/// Receives an image prop
/// fades in from bottom to top
/// centers in the middle of the screen
// receives a prop to wait until the document is loaded

export default function LogoBanner({logo, loaded}) {
    const container = useRef(null);
    const logoRef = useRef(null);
    function animateBanner(){
        gsap.fromTo(logoRef.current, 
            {opacity: 0, y: 150, delay: 2}, 
            {opacity: 1,  y: 10, duration: 1.5, ease: "power4.inOut"}
        );
    }
    useEffect(() => {
        if(loaded === true){
            animateBanner();
        }
        return () => {
            //window.removeEventListener('pointermove', handleMove);
        }
    }, [loaded]);
  return (
      <div className="logo-banner-container" ref={container}>
            <img id={"bannerLogo"} ref={logoRef} src={logo} alt=""/>
      </div>
  );
}

