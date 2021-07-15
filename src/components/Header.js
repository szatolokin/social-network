import React from 'react';

import './Header.css'

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          SN
        </Link>
      </div>
    </header>
  )
}
