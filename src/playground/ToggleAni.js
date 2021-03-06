import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Toggle = () => {
    const [isToggled, setToggle] = useState(false)
    const {color, y} = useSpring({
        // opacity: isToggled ? 1 : 0,
        color: isToggled ? '#000' : 'green',
        // fontSize: isToggled ? '2rem' : '10em',
        // transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0, -50px,0)'
        y: isToggled ? 0 : 1
    })

    return (
        <div>
            <animated.h1 
                style={{
                    transform: y.interpolate({
                        range: [0, .25, .50, .75, 1],
                        output: [0, -25, -50, -100, -50]
                    }).interpolate((y) => `translate3d(0 , ${y}px, 0)`),
                    color
                }}
            >Hellooo</animated.h1>
            <button onClick={() => setToggle(!isToggled)}>toggle</button>
            {
                isToggled && ( <h1>TRUUEE</h1>)
            }
        </div>
    )
}

export default Toggle

// const AnimatedTitle = animated.h1;
// const AnimatedTitle = animated(componentName);