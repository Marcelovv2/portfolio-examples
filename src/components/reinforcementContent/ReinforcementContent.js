import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ReinforcementContent.css';

gsap.registerPlugin(ScrollTrigger);
//TODO:
// Receives 3 images 
// Receives 1 string classname for background
// Receives a string for side text


export default function ReinforcementContent({image1, image2, image3, className}) {
    const container = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const testRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context((self) => {
        //WITH Timelines (cleaner, more versatile)
        const tl = gsap.timeline({
            repeat: 0, 
            repeatDelay: 0,
            scrollTrigger: {
                trigger: container.current,
                endTrigger: container.current,
                markers: true
            }
        });
        tl.fromTo(card1Ref.current,{opacity: 0, rotation: 3}, {rotation: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.5});
        tl.fromTo(card2Ref.current,{opacity: 0, rotation: 3}, {rotation: 0, opacity: 1, duration: 0.5, ease: "power2.out"});
        tl.fromTo(card3Ref.current,{opacity: 0, rotation: 3}, {rotation: 0, opacity: 1, duration: 0.5, ease: "power2.out"});

        }, container); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);


  return (
    <div id="reinforcementContainer" >
    <h1 className="reinforcement-tittle">Sint elit veniam Lorem.</h1>
    <div className={"reinforcement-cards-container" + " " + className} ref={container} >
        <div id="reinforceCard1" className="card"  ref={card1Ref}>
            <img src={image1}/>
            <h3 className="card-header">Title</h3>
            <span className="card-text">Lorem ipsum addendum tuborren, alcairt salem neail.</span>
        </div>
        <div id="reinforceCard2" className="card" ref={card2Ref}>
            <img src={image2}/>
            <h3 className="card-header">Title</h3>
            <span className="card-text">Lorem ipsum addendum tuborren, alcairt salem neail.</span>
        </div>
        <div id="reinforceCard3" className="card" ref={card3Ref}>
            <img src={image3}/>
            <h3 className="card-header">Title</h3>
            <span className="card-text">Lorem ipsum addendum tuborren, alcairt salem neail.</span>
        </div>

    </div>

    <button className="followButton">
        Follow Along!
    </button>
    </div>


     
  );
}

