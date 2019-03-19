import React from "react"

import "./heroimage.css"
import hex2 from "./img/hex2.svg"
import hex3 from "./img/hex3.svg"
import hex4 from "./img/hex4.svg"
import hex5 from "./img/hex5.svg"
import hex6 from "./img/hex6.svg"
import hex7 from "./img/hex7.svg"
import hex8 from "./img/hex8.svg"
import hex9 from "./img/hex9.svg"
import hex10 from "./img/hex10.svg"
import hex11 from "./img/hex11.svg"

import hexmain from "./img/main.svg"

const Heroimage = () => (
    <div>
      <div className="hero-animation" style={{ marginTop: `90px`}}>
        <img className="hex-2" src={hex2} alt="hex2" />
        <img className="hex-3" src={hex3} alt="hex3" />
        <img className="hex-4" src={hex4} alt="hex4" />
        <img className="hex-5" src={hex5} alt="hex5" />
        <img className="hex-6" src={hex6} alt="hex6" />
        <img className="hex-7" src={hex7} alt="hex7" />
        <img className="hex-8" src={hex8} alt="hex8" />
        <img className="hex-9" src={hex9} alt="hex9" />
        <img className="hex-10" src={hex10} alt="hex10" />
        <img className="hex-11" src={hex11} alt="hex11" />
        <img className="hex-main" src={hexmain} alt="hexmain"/>
      </div>
    </div>
)

export default Heroimage
