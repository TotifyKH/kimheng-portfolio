import React from 'react'
import { useState } from 'react'
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from './components/Navbar';
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="app bg-dark-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Landing setSelectedPage={setSelectedPage} />
      <Skills setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage}/>
      <Contact setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
