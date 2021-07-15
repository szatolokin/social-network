import React from 'react';

import './Welcome.css'

import Title from './Title.js'
import Button from './Button.js'

export default function Welcome() {
  return (
    <div className="welcome">
      <Title>
        Добро пожаловать!
      </Title>
      <section className="welcome__section">
        <div className="welcome__row">
          <div className="welcome__col">
            <Button>
              Войти
            </Button>
          </div>
          <div className="welcome__col">
            <Button>
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
