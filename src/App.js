import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import logo from './logo.svg';
import Routes from './Routes'
import Nav from './Nav'
import Checkout from './Checkout'
import Modal from './Modal'
import Accordion from './Accordion'
import Waypoints from './Waypoints'
import Boxes from './Boxes'
import './App.css';



const App = () => {
    // ShortVersion
    const fadeOpti = useSpring({from: { opacity: 0}, opacity: 1})
    const [isNavOpen, setNavOpen] = useState(false)
    const navAnimation = useSpring({
      transform: isNavOpen ? 'translate3d(0,0,0) scale(1)' : 'translate3d(100%,0,0) scale(0.6)'
    })
    
    return (
      <animated.div className="App" style={fadeOpti}>
        <header className="App-header">
          <img src={logo} className="logo" alt=""/>
          {/* <button 
            onClick={() => setNavOpen(!isNavOpen)}
            className="menu-button"
          >
            Menu
          </button> */}
          {/* <Nav style={navAnimation}/> */}
          <button 
            onClick={() => setNavOpen(!isNavOpen)}
            className="menu-button"
          >
            Checkout
          </button>
        </header>
        <main>
          <Modal/>
          <Accordion />
          <Boxes />
          {/* <Waypoints /> */}
          <Checkout isOpen={isNavOpen}/>
        </main>
      </animated.div>
    );
}


export default App;


