import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './FallingObjects.css';
import LogoBanner from '../logoBanner/LogoBanner';

//TODO:
/// Receives 3 props of images
/// Images are presented in different sizes and each one is multiplied
/// Images fall and rotate inside container

export default function FallingObjects({image1, image2, image3}) {
    const container = useRef();
    const image1Ref1 = useRef();
    const image1Ref2 = useRef();
    const image1Ref3 = useRef();
    const image2Ref1 = useRef();
    const image2Ref2 = useRef();
    const image2Ref3 = useRef();
    const image3Ref1 = useRef();
    const image3Ref2 = useRef();
    const image3Ref3 = useRef();
    
    
    // Image 1
    function CreateImage1Copies(image) {
      const image1Copies = [{ref:image1Ref1, id:"image1Ref1"},{ref:image1Ref2, id:"image1Ref2"},{ref:image1Ref3, id:"image1Ref3"}];
      const singleImageCopies = image1Copies.map( element =>{
        let imageCopy = <img src={image} ref={element.ref} id={element.id} key={String(element.ref + element.id)}/>;
        return imageCopy
      })
      return <React.Fragment>{singleImageCopies}</React.Fragment>;
    }
    useEffect(() => {
        const ctx = gsap.context((self) => {
        gsap.to(image1Ref1.current, {
          rotation: "+=360",
          y: 800,
          duration: 3,
          repeat: -1,
          ease: "power1.out"
        });
        gsap.to(image1Ref2.current, {
          rotation: "+=360",
          y: 800,
          duration: 6,
          repeat: -1,
          ease: "power1.out"
        });
        gsap.to(image1Ref3.current, {
          rotation: "-=360",
          y: 800,
          duration: 10,
          repeat: -1, 
          ease: "power1.out"
        });
        }, container); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);
    // Image 2
    function CreateImage2Copies(image) {
      const image1Copies = [{ref:image2Ref1, id:"image2Ref1"},{ref:image2Ref2, id:"image2Ref2"},{ref:image2Ref3, id:"image2Ref3"}];
      const singleImageCopies = image1Copies.map( element =>{
        let imageCopy = <img src={image} ref={element.ref} id={element.id} key={String(element.ref + element.id)}/>;
        return imageCopy
      })
      return <React.Fragment>{singleImageCopies}</React.Fragment>;
    }
    useEffect(() => {
        const ctx = gsap.context((self) => {
        gsap.to(image2Ref1.current, {
          rotation: "+=360",
          y: 800,
          duration: 5,
          repeat: -1, 
          ease: "power1.out"
        });
        gsap.to(image2Ref2.current, {
          rotation: "+=360",
          y: 800,
          duration: 8,
          repeat: -1, 
          ease: "power1.out"
        });
        gsap.to(image2Ref3.current, {
          rotation: "-=360",
          y: 800,
          duration: 12,
          repeat: -1, 
          ease: "power1.out"
        });
        }, container); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);
    // Image 3
    function CreateImage3Copies(image) {
      const image1Copies = [{ref:image3Ref1, id:"image3Ref1"},{ref:image3Ref2, id:"image3Ref2"},{ref:image3Ref3, id:"image3Ref3"}];
      const singleImageCopies = image1Copies.map( element =>{
        let imageCopy = <img src={image} ref={element.ref} id={element.id} key={String(element.ref + element.id)}/>;
        return imageCopy
      })
      return <React.Fragment>{singleImageCopies}</React.Fragment>;
    }
    useEffect(() => {
        const ctx = gsap.context((self) => {
        gsap.to(image3Ref1.current, {
          rotation: "+=360",
          y: 800,
          duration: 5,
          repeat: -1,
          ease: "power1.inOut"
        });
        gsap.to(image3Ref2.current, {
          rotation: "+=360",
          y: 800,
          duration: 8,
          repeat: -1,
          ease: "power1.inOut"
        });
        gsap.to(image3Ref3.current, {
          rotation: "-=360",
          y: 800,
          duration: 12,
          repeat: -1, 
          ease: "power1.inOut"
        });
        }, container); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);
   const animatedImages1 =  CreateImage1Copies(image1);
   const animatedImages2 =  CreateImage2Copies(image2);
   const animatedImages3 =  CreateImage3Copies(image3);
  return (
    <React.Fragment>
      <div className="falling-container" ref={container}>
        {animatedImages1}
        {animatedImages2}       
        {animatedImages3}       
      </div>
    </React.Fragment>
  );
}

