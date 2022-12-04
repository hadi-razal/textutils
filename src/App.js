import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode activated", "success");
      document.title = "TextUtils - DarkMode";
      // setInterval(() => {
      //   document.title = "Warning"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Downlaod Now"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated", "success");
      document.title = "TextUtils - LightMode";
    }
  };
  return (
    <>
      {/* <TextForm
        showAlert={showAlert}
        mode={mode}
        heading="Enter The Text Below"
      /> */}
      {/* <About /> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
          <Route
           exact path="/Home"
            element={
              <TextForm

                heading="Enter text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
