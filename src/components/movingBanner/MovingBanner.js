import React from 'react';
import { useRef, useEffect } from 'react';
import horizontalLoop from './HorizontalLoop';
import { gsap } from 'gsap';
import './MovingBanner.css';

//TODO:
/// Receive 2 props of string or images
/// flows from right to left

export default function MovingBanner({section1, section2}) {
    const container = useRef();
    //Check if props are images or strings and creates multiple nodes to cover the banner
    function SectionList() {
        const numbOfWords = [];
        for (let i = 1; i <= 20; i++) {
            numbOfWords.push(i)   
        }
        let section1Type, section2Type; 
        if(section1.match(/\.(png|jp(e*)g|svg|gif)$/) != null){
            section1Type = "image";
        }else{
            section1Type = "string";
        }
        if(section2.match(/\.(png|jp(e*)g|svg|gif)$/) != null){
            section2Type = "image";
        }else{
            section2Type = "string";
        }
        const bannerWords = numbOfWords.map(numb => {
            let section;
            if(numb % 2 === 0){
                section1Type === "image" ?
                    section = 
                    <div className="box" key={String(numb)}>
                        <img alt="" className="banner-img" src={section1} />
                    </div>
                :
                    section = 
                    <div className="box" key={String(numb)}>
                        <div>{section1}</div>
                    </div>
                }
            else{
                section2Type === "image" ?
                    section = 
                    <div className="box" key={String(numb)}>
                        <img alt="" className="banner-img" src={section2} />
                    </div>
                :
                    section = 
                    <div className="box" key={String(numb)}>
                        <div>{section2}</div>
                    </div>              
            }

            return section;
            
        });
        
        return (
          <React.Fragment>
            {bannerWords}
          </React.Fragment>
        )
    }
    const banner = SectionList();

    useEffect(() => {
        const ctx = gsap.context((self) => {
        const boxes = gsap.utils.toArray(".box");
        const loop = horizontalLoop(boxes, {paused: false, repeat: -1, speed: 0.5});
        boxes.forEach((box, i) => box.addEventListener("load", () => loop.toIndex(i, {duration: 0.8, ease: "power1.inOut"})));    
        }, container); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

  return (
      <div id="bannerContainer" className="banner-container" ref={container}>
        {banner}
      </div>
  );
}

