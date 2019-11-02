import React, { useState} from 'react'
import { animated, useSpring } from 'react-spring'
import useMeasure from './useMeasure'

const Accordion = () => {
    const [on, toggle] = useState(false)
    const [bind, { height, top }] = useMeasure()
    const animate = useSpring({
        overflow: 'hidden',
        height: on ? height + top * 2 : 0
    })
    return (
        <div>
            <button onClick={() => toggle(!on)}>Toggle</button>
            <animated.div style={animate}>
                <div {...bind}  className="accordion">
                    <p>Helooxs i am in accordion</p>
                </div>
            </animated.div>
    
        </div>
    )
}

export default Accordion
