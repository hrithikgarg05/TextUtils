import logo from './logo.svg';
import Navbar from './components/Navbar';
//import About from './components/About';
import './App.css';
import PropTypes from 'prop-types'
import { useState } from 'react';
import TextForm from './components/TextForm';
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light")
  const [switchText, setswitchText] = useState("Enable")
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setswitchText('Disable')
      setmode('dark')
      document.body.style.backgroundColor='#042743'
    }
    else if(mode==='dark')
    {
      setswitchText('Enable')
      setmode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} switch={switchText}/>
    <div className="container my-3" >
      {/* <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode}/>}/>
          <Route path="/about" element={<About mode={mode}/>}/>
      </Routes> */}
      <TextForm heading="Enter the text to analyze" mode={mode}/>
    </div>
    {/* </Router> */}
    </>
  );
}

Navbar.propTypes = {
  title:PropTypes.string
}
TextForm.propTypes={
  heading:PropTypes.string
}

export default App;
