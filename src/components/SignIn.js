import React from 'react'

import './SignIn.css'

import Title from './Title.js'
import Button from './Button.js'

import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <section className="sign-in">
      <Title>
        Вход:
      </Title>
      <form action="" className="sign-in__form">
        <Link to="/user">
          <Button>
            Войти
          </Button>
        </Link>
      </form>
    </section>
  )
}
