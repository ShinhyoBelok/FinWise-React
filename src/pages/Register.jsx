import React, { useState } from 'react'
import './styles/register.css'
import RegisterAccount from '../components/RegisterAccount'
import RegisterAcc from '../components/RegisterAcc';

export default function Register() {
  const [accountState, setaccountState] = useState(false);
  const activeLink = (e) => {
    e.preventDefault();
    const register = document.getElementById('registerOp');
    const account = document.getElementById('accountOp');
    
    if (e.target.id == 'registerOp') {
      register.classList.add('activeOp')
      account.classList.remove('activeOp')
      setaccountState(false);
    } else if (e.target.id == 'accountOp') {
      register.classList.remove('activeOp')
      account.classList.add('activeOp')
      setaccountState(true);
    }
  }

  return (
    <div id='registerId'>
      <section id="registerAccountSection">
        <div className="selectionMenu flexbox">
          <h3>Selection</h3>
          <div className="options flexbox">
            <div onClick={activeLink} id='registerOp' className='activeOp'>Register</div>
            <span className="line"></span>
            <div id='accountOp' onClick={activeLink}>Account</div>
          </div>
        </div>
      </section>
      {!accountState ? <RegisterAccount /> : <RegisterAcc />}
    </div>
  )
}
