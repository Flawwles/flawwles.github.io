import React from "react"
import OnVisible, { setDefaultProps } from 'react-on-visible';
import getClasses from "../../lib/getclasses"

import "./animation.css"

const Animation = ({children, effect}) => (
  <OnVisible className={getClasses('animation', {
    fadeInLeft: effect === 'fadeInLeft',
    fadeInRight: effect === 'fadeInRight',
    fadeIn: effect === 'fadeIn'
  })}>
    {children}
  </OnVisible>
)
setDefaultProps({
    percent: 30
});

export default Animation
