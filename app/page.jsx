'use client'
import React, { useEffect, useRef } from "react";
import style from './layout.module.scss'
import Nav from "./components/Nav/Nav"
import Page1 from "./(pages)/p1/page";
import Page2 from "./(pages)/p2/page";
import Page3 from "./(pages)/p3/page";
import Page4 from "./(pages)/p4/page";

export default function homePage (){
  const divs = [
    <Page2 id='skills'/>,
    <Page3 id='projects'/>,
    <Page4 id='contact'/>,
  ];
  
  const observerRefs = useRef([]);

  useEffect(() => {
    // console.log(observerRefs.current);
  }, [observerRefs.current]);

    return (
      <main>
        <Page1/>
        <div className={style.container}>
          <Nav  observerRefs={observerRefs} />
          <div>
            {divs.map((div, key) => {
            return (
              <div className={style.pages}>
                <p className={style.ref} ref={(el) => (observerRefs.current[key] = el)}/>
                <div className={style.body}>{div}</div>
              </div>
            );
          })}
          </div>
        </div>
      </main>
    )
}