import React from 'react'
import { useState } from 'react'
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from './components/Navbar';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="app bg-dark-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
