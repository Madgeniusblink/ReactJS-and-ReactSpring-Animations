import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'

const Checkout = ({ isOpen }) => {
    const { x } = useSpring({
        // transform: isOpen ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)'
        x: isOpen ? 0 : 100,
        config: config.stiff,
      })
    return (
        <div 
            className="checkout"
            style={{
                pointerEvents: isOpen ? 'all' : 'none'
            }}
        >
            <animated.div style={{
                transform: x.interpolate(x => `translate3d(${x * -1}%,0,0)`)
            }} className="checkout-left">
                
            </animated.div>
            <animated.div style={{
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
            }} className="checkout-right">
                
            </animated.div>
        </div>
    )
}

export default Checkout
