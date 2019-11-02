import React, { useState} from 'react'
import { animated, useTrail } from 'react-spring'


const Boxes = () => {
    const [on, toggle] = useState(false)
    const trail = useTrail(4, {
            opacity: on ? 0 : 1,
            transform: on ? 'scale(0.3)' : 'scale(1)'
        }
    )

    return (
        <div className="boxes-grid">
        <button onClick={() => toggle(!on)}>Open</button>
        {
            trail.map(animation => <animated.div className="box" style={animation}/> )
        }
        </div>
    )
}

export default Boxes
