// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


let fetchHome = "ReactTextUtils";
let fetchTitle = "RanjanPage";
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [textColor, setTextColor] = useState('#000000');

  let myStyle = {
      color: textColor
  }
  
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert('')
    }, 1500);
  }


  let toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextColor('#ffffff');
      document.body.style.backgroundColor = '#112f5b';
      showAlert("Dark Mode is Enabled", "success");
      document.title = "TextUtils - Dark Mode Enabled";

      // setInterval(() => {
      //   document.title = "TextUtils - is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils - is Blessing";
      // }, 1500);

    }
    else {
      setMode('light');
      setTextColor('#000000');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
      document.title = "TextUtils - Light Mode Enabled";
    }
  }


  return (
    <>
      <Router>
        <Navbar title={fetchTitle} home={fetchHome} about="aboutReact" mode={mode} toggle={toggle} />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/textUtils" element={<TextArea heading="Enter your Text for analyzing" mode={mode} showAlert={showAlert} />} />
          <Route path="/home" element={<table width="100%" border="0"><tbody><tr><td align="center" style={myStyle}>Welcome to <b>React HomePage</b></td></tr></tbody></table>} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
