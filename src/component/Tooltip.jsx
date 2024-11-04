import React, { useEffect, useRef } from 'react'
import './tooltip.css'

const Tooltip = ({ position, left, top }) => {

    const tooltipRef = useRef();

    useEffect(()=>{
        tooltipRef.current.style.top = top + 'px';
        tooltipRef.current.style.left = left + 'px';
    }, [top, left])

    return (
        <>
            <div ref={tooltipRef} className={`tooltip tooltip-${position}`}>
                <p>Thanks for hovering!</p>
                <p>I'm a tooltip.</p>
            </div>
        </>
    )
}

export default Tooltip