import React, { useState } from 'react'
import { animated, useTransition } from 'react-spring'

const Modal = ({closeModal, animation, pointerEvents}) => {
    return (
        // Modal div is the whole screen vh thats why we do not pass the animation div there
        <div style={{pointerEvents}} className="modal">
            <animated.div style={animation} className="modal-card">
                <h1>Modal</h1>
                <button
                    onClick={closeModal}
                >close</button>                             
            </animated.div>
        </div>
    )
}
const ModalWrapper = () => {
    const [on, toggle] = useState(false)
    const transition = useTransition(on, null, {
        from: { opacity: 0, transform: 'translate3d(0, -40px, 0)'},
        enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)'},
        leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)'}
    })
    const pointerEvents = on ? 'all' : 'none'
    return (
        <div>
            {transition.map(({item, key, props}) => 
                item && <Modal pointerEvents={pointerEvents} key={key} animation={props} closeModal={() => toggle(false)} />
                
            )}
            <button
                onClick={() => toggle(!on)}
            >Open</button>
        </div>
    )
}

export default ModalWrapper
