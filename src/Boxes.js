import React, { useState, useRef } from 'react'
import { animated, useTrail, useTransition, useSpring, useChain } from 'react-spring'

const items = [0.2,0.3,0.4,0.5,1]

const Boxes = () => {
    const [on, toggle] = useState(false)

    const springRef = useRef()
    const { size } = useSpring({
        ref: springRef,
        from: {size: '20%'},
        to: {size: on ? '100%' : '20%'}
    })

    const transitionRef = useRef()
    // with Trail
    // const trail = useTrail(5, {
    //         ref: transitionRef,
    //         from:{
    //             opacity: 0,
    //             transform: 'scale(0.3)' 
    //         },
    //         to:{
    //             opacity: on ? 1 : 0,
    //             transform: on ? 'scale(1)' : 'scale(0.3)' 
    //         },
    //     }
    // )

    // With Transition
    const transition = useTransition(on ? items : [], item => item,{
            ref: transitionRef,
            trail: 400 / items.length,
            from:{
                opacity: 0,
                transform: 'scale(0)' 
            },
            enter:{
                opacity: 1,
                transform: 'scale(1)'
            },
            leave:{
                opacity: 0,
                transform: 'scale(0)' 
            },
        }
    )
    useChain(on ? [springRef, transitionRef] : [transitionRef, springRef])

    return (
        <div className="full-height">
            <animated.div style={{height: size, width: size}} className="boxes-grid-two"  onClick={() => toggle(!on)}>
            {/* {
                trail.map(animation => <animated.div className="box-two" style={animation}/> )
            } */}
            {
                transition.map(({item, key, props}) => <animated.div key={key} className="box-two" style={props}/> )
            }
            </animated.div>
        </div>
    )
}

export default Boxes
