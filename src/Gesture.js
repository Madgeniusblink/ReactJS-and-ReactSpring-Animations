import React from 'react'
import { useGesture } from 'react-with-gesture'
import { animated, useSpring } from 'react-spring'

const Gesture = () => {
    const [{ xy }, set] = useSpring( () => ({ xy: [0, 0]}) )

    const bind = useGesture( ({ down, delta }) => {
        if (down) {
            set({ xy: down ? delta : [0,0]})
        } else {
            if (delta[0] > 200) {
                set({ xy: [300, 0]})
            } else if (delta[0] < -200) {
                set({ xy: [-300, 0]})
            } else {
                set({ xy: [0, 0]})
            }
        }
    } )
    return (
        <animated.div 
            style={{
                opacity: xy.interpolate({ 
                    map: Math.abs,
                    range: [0, 400], 
                    output: [1,0]
                }),
                transform: xy.interpolate( (x,y) => `translate3d(${x}px, 0px, 0)`)
            }}
            {...bind()} 
            className="box"
            
            />
    )
}

export default Gesture
