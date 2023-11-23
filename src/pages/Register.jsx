import React from 'react'
import './styles/register.css'
import RegisterAccount from '../components/RegisterAccount'

export default function Register() {
  const activeLink = () => {

  }

  return (
    <div id='registerId'>
      <section id="registerAccountSection">
        <div className="selectionMenu flexbox">
          <h3>Selection</h3>
          <div className="options flexbox">
            <div>Register</div>
            <span className="line"></span>
            <div>Account</div>
          </div>
        </div>
      </section>
      <RegisterAccount />
    </div>
  )
}
