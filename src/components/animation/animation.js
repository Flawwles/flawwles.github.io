import React from "react"
import OnVisible, { setDefaultProps } from 'react-on-visible';

import "./animation.css"

const Animation = ({children, animation}) => (
  <OnVisible className="animated">
    {children}
  </OnVisible>
)
setDefaultProps({
    bounce: true,
    visibleClassName: 'fadeIn',
    percent: 10
});

export default Animation
