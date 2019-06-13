import React from "react"

import pure360style from "./pure360.module.css"

import puregrid from './img/icons/grid.svg'

import pureicon1 from './img/icons/pureicon1.svg'
import pureicon2 from './img/icons/pureicon2.svg'
import pureicon3 from './img/icons/pureicon3.svg'
import pureicon4 from './img/icons/pureicon4.svg'
import pureicon5 from './img/icons/pureicon5.svg'
import pureicon6 from './img/icons/pureicon6.svg'
import pureicon7 from './img/icons/pureicon7.svg'
import pureicon8 from './img/icons/pureicon8.svg'
import pureicon9 from './img/icons/pureicon9.svg'
import pureicon10 from './img/icons/pureicon10.svg'
import pureicon11 from './img/icons/pureicon11.svg'
import pureicon12 from './img/icons/pureicon12.svg'
import pureicon13 from './img/icons/pureicon13.svg'
import pureicon14 from './img/icons/pureicon14.svg'
import pureicon15 from './img/icons/pureicon15.svg'
import pureicon16 from './img/icons/pureicon16.svg'
import pureicon17 from './img/icons/pureicon17.svg'
import pureicon18 from './img/icons/pureicon18.svg'

class Pure360icons extends React.Component {
  render () {
    const handelHover = (newSrc) => {
      const largeIcon = document.querySelector("#largeicon");
      largeIcon.src = newSrc;
    }
    return (
      <section>
        <div style={{
          width: "200px",
          height: "200px",
          margin: "3rem auto",
          position: 'relative'
        }}>
          <img src={puregrid} alt=""/>
          <img src={pureicon4} alt="" id="largeicon" style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "200px",
            height: "200px",
            opacity: "0.5"
          }}/>
        </div>
        <div style={{maxWidth: "40rem", margin: "0 auto"}}>
          <div className={pure360style.iconswrap} style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            columnGap: "2rem"
          }}>
            <img src={pureicon1} alt="pureicon1" onMouseEnter={()=>handelHover(pureicon1)}/>
            <img src={pureicon2} alt="pureicon2" onMouseEnter={()=>handelHover(pureicon2)}/>
            <img src={pureicon3} alt="pureicon3" onMouseEnter={()=>handelHover(pureicon3)}/>
            <img src={pureicon4} alt="pureicon4" onMouseEnter={()=>handelHover(pureicon4)}/>
            <img src={pureicon5} alt="pureicon5" onMouseEnter={()=>handelHover(pureicon5)}/>
            <img src={pureicon6} alt="pureicon6" onMouseEnter={()=>handelHover(pureicon6)}/>
          </div>
          <div className={pure360style.iconswrap} style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(12, 1fr)",
                        columnGap: "2rem"
                     }}>
            <img src={pureicon7} alt="pureicon7" onMouseEnter={()=>handelHover(pureicon7)}/>
            <img src={pureicon8} alt="pureicon8" onMouseEnter={()=>handelHover(pureicon8)}/>
            <img src={pureicon9} alt="pureicon9" onMouseEnter={()=>handelHover(pureicon9)}/>
            <img src={pureicon10} alt="pureicon10" onMouseEnter={()=>handelHover(pureicon10)}/>
            <img src={pureicon11} alt="pureicon11" onMouseEnter={()=>handelHover(pureicon11)}/>
            <img src={pureicon12} alt="pureicon12" onMouseEnter={()=>handelHover(pureicon12)}/>
            <img src={pureicon13} alt="pureicon13" onMouseEnter={()=>handelHover(pureicon13)}/>
            <img src={pureicon14} alt="pureicon14" onMouseEnter={()=>handelHover(pureicon14)}/>
            <img src={pureicon15} alt="pureicon15" onMouseEnter={()=>handelHover(pureicon15)}/>
            <img src={pureicon16} alt="pureicon16" onMouseEnter={()=>handelHover(pureicon16)}/>
            <img src={pureicon17} alt="pureicon17" onMouseEnter={()=>handelHover(pureicon17)}/>
            <img src={pureicon18} alt="pureicon18" onMouseEnter={()=>handelHover(pureicon18)}/>
          </div>
        </div>
      </section>
    );
  }
}
export default Pure360icons
