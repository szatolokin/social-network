import React from 'react';

import './Welcome.css'

import Title from './Title.js'
import Button from './Button.js'

import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="welcome">
      <Title>
        Добро пожаловать!
      </Title>
      <section className="welcome__section">
        <div className="welcome__row">
          <div className="welcome__col">
            <Link to="/sign-in">
              <Button>
                Войти
              </Button>
            </Link>
          </div>
          <div className="welcome__col">
            <Link to="/sign-up">
              <Button>
                Зарегистрироваться
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
