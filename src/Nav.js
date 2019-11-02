import React from 'react'
import { animated } from 'react-spring'

const NaV = ({ style }) => {
    return (
        <animated.div className="nav-wrapper" style={style} >
            <nav>
                <a href="/">Home</a>
                <a href="/">Boys</a>
                <a href="/">Girls</a>
                <a href="/">About</a>
                <a href="/">Education</a>
                <a href="/">Contact</a>
                <a href="/">Faq</a>
            </nav>
        </animated.div>
    )
}

export default NaV
