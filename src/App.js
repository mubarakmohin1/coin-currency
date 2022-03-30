import React from 'react'
import { Routes, Route } from "react-router-dom";
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

const App = () => {
  return (
    <div>
      <Header/>
       
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/coins' element={<Coins/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        {/* <Route path='/about' element={<About/>}></Route> */}

      </Routes>

    </div>
  )
}

export default App
