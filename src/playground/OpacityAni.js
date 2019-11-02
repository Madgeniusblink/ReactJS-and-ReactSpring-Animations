import React from 'react'
import { useSpring, animated } from 'react-spring'

const OpacityAni = () => {
    const fade = useSpring({
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      })
      
    return (
        <animated.div style={fade}>
            
        </animated.div>
    )
}

export default OpacityAni
