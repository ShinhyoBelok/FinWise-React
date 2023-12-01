import React, { useState } from 'react';
import './styles/register.css';
import RegisterForm from '../components/RegisterForm';
import AccountForm from '../components/AccountForm';

export default function Register() {
  const [accountState, setAccountState] = useState(false);

  const handleLinkClick = (isAccount) => {
    setAccountState(isAccount);
  };

  return (
    <div id='registerId'>
      <section id="registerAccountSection">
        <div className="selectionMenu flexbox">
          <h3>Selection</h3>
          <div className="options flexbox">
            <div
              onClick={() => handleLinkClick(false)}
              className={` ${!accountState ? 'activeOp' : ''}`}
            >
              Register
            </div>
            <span className="line"></span>
            <div
              onClick={() => handleLinkClick(true)}
              className={` ${accountState ? 'activeOp' : ''}`}
            >
              Account
            </div>
          </div>
        </div>
      </section>
      {accountState ? <AccountForm /> : <RegisterForm />}
    </div>
  );
}
