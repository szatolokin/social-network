import React from 'react'

import './App.css'

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__wrapper">
          <Main />
        </div>
        <Footer />
      </div>
    </Router>
  )
}
