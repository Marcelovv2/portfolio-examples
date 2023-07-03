import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './AttentionGrabber.css';
//TODO:
// Receives 3 images to flip, each image converts to the next
// Receives 1 string classname for background
// Receives a string for side text


export default function AttentionGrabber({image1, image2, image3, text, className}) {
    const container = useRef(null);
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const image3Ref = useRef(null);
    useEffect(() => {
        const ctx = gsap.context((self) => {
        //WITH Timelines (cleaner, more versatile)
        const tl = gsap.timeline({repeat: -1, repeatDelay: 0});
        tl.fromTo(image1Ref.current,{display: "block"}, {rotateY: 180, display:"none",duration: 1, ease: "none"});
        tl.fromTo(image2Ref.current,{display: "none"}, {rotateY: 180, display:"block",duration: 1, ease: "none"});
        tl.to(image2Ref.current,{display: "none", duration: 0});
        tl.fromTo(image3Ref.current,{display: "none"}, {rotateY: 180, display:"block",duration: 1, ease: "none"});
        }, container); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);
    
  return (
    <div className={"attention-grabber-container" + " " + className}  >
        <div id="imagesContainer" ref={container}>
            <img src={image1} ref={image1Ref} id="flippingImage1"/>
            <img src={image2} ref={image2Ref} id="flippingImage2"/>
            <img src={image3} ref={image3Ref} id="flippingImage3"/>
        </div>
        <div id="attentionGrabberTextContainer">{text}</div>
    </div>

     
  );
}

