import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
      <header id="header" className="bg-dark">
        <div className="container">
          {/* Top Header */}
          <div id="top-header" className="container d-flex justify-content-between">
              <div className="top-left d-flex">
                  <a href="tel:77140-44049" title="contact">
                    <img src="images/icons/call.svg" alt="" /> 77140-44049
                  </a>
                  <a href="mailto:info@sunandsungroup.com" title="gmail">
                    <span className="icon fa fa-envelope-o"></span>info@sunandsungroup.com
                  </a>
              </div>
              <div className="top-right">Right</div>
          </div>
          {/* Navbar */}
          <div id="navbar" className="d-flex justify-content-between"></div>
        </div>
      </header>
    </>
  )
}

export default App

