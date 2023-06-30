import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './LogoBanner.css';

//TODO:
/// Receives an image prop
/// fades in from bottom to top
/// centers in the middle of the screen

export default function LogoBanner({logo}) {
    const container = useRef();
    const logoRef = useRef();
    useEffect(() => {
        const ctx = gsap.context((self) => {
            window.addEventListener("load", (event) => {
                gsap.fromTo(logoRef.current, 
                    {opacity: 0, y: 150}, 
                    {opacity: 1,  y: 10, duration: 1.5, ease: "power4.inOut"}
                );
            });
            
        }, container); // <- Scope!
       
        return () => ctx.revert(); // <- Cleanup!
    }, []);

  return (
      <div className="logo-banner-container" ref={container}>
        <div className="logo-container">
            <img id={"bannerLogo"} ref={logoRef} src={logo}/>
        </div>
      </div>
  );
}

