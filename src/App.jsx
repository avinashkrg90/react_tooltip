import React, { useState } from 'react'
import Tooltip from './component/tooltip'
import './App.css'

const App = () => {

  const [tooltipVisible, setTooltipvisible] = useState(false);
  const [tooltipTop, setTooltipTop] = useState(100);
  const [tooltipLeft, setTooltipLeft] = useState(800);
  const [tooltipPosition, setTooltipPosition] = useState("left");

  const handleMouseEnter = (e) => {
    if (window.innerWidth - e.target.offsetLeft - e.target.offsetWidth > 225) {
      setTooltipPosition("right");
      setTooltipLeft(e.target.offsetLeft + e.target.offsetWidth + 10);
      setTooltipTop(e.target.offsetTop);
    }
    else {
      setTooltipPosition("left");
      setTooltipLeft(e.target.offsetLeft - 210);
      setTooltipTop(e.target.offsetTop);
    }  

    setTooltipvisible(true);
  }

  const handleMouseLeave = (e) => {
    setTooltipvisible(false);
  }

  return (
    <>
      <div className="container">
        <button onMouseEnter={(e) => (handleMouseEnter(e))} onMouseLeave={(e) => (handleMouseLeave(e))} className='testBtn'>Hover on me!</button>
        <button onMouseEnter={(e) => (handleMouseEnter(e))} onMouseLeave={(e) => (handleMouseLeave(e))} className='testBtn'>Hover on me!</button>
        <button onMouseEnter={(e) => (handleMouseEnter(e))} onMouseLeave={(e) => (handleMouseLeave(e))} className='testBtn'>Hover on me!</button>
      </div>
      {tooltipVisible ? <Tooltip position={tooltipPosition} left={tooltipLeft} top={tooltipTop} /> : null}
    </>
  )
}

export default App