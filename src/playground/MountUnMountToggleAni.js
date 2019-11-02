import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'

const Toggle = () => {
    const [isToggled, setToggle] = useState(false)
    const transition = useTransition(isToggled, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    })

    return (
        <div>
            {
                transition.map(({ item, key, props }) => 
                    item && (
                        <animated.h1 key={key} style={props}>Hellooo</animated.h1>
                        )
                )
            }
            
            <button onClick={() => setToggle(!isToggled)}>toggle</button>
        </div>
    )
}

export default Toggle




// import React, { useState } from 'react'
// import { useTransition, animated } from 'react-spring'

// const Toggle = () => {
//     const [isToggled, setToggle] = useState(false)
//     const transition = useTransition(isToggled, null, {
//         from: {opacity: 0, position: 'absolute'},
//         enter: {opacity: 1},
//         leave: {opacity: 0},
//     })

//     return (
//         <div
//             style={{
//                 position: 'relative'
//             }}>
//             {
//                 transition.map(({ item, key, props }) => 
//                     item ? (
//                         <animated.h1 style={props}>Hellooo</animated.h1>
//                         ) : (
//                             <animated.h1  style={props}>World</animated.h1>
//                         )
//                 )
//             }
            
//             <button onClick={() => setToggle(!isToggled)}>toggle</button>
//         </div>
//     )
// }

// export default Toggle