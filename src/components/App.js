import React from 'react';

import './App.css'

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__wrapper">
        <Main />
      </div>
      <Footer />
    </div>
  )
}
