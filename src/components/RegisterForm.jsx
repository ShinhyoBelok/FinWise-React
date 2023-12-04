import React from 'react'
import { useState } from 'react';
import './styles/registerForm.css'
import FormSelection from './FormSelection';
import { v4 as uuidv4 } from 'uuid';

export default function RegisterForm() {
  const [linkState, setlinkState] = useState('expenses');

  const handleLinkClick = (linkName) => {
    setlinkState(linkName);
  };

  const [numericValue, setNumericValue] = useState('');

  const handleNumericInputChange = (event) => {
    const newValue = event.target.value.replace(/[^0-9.]/g, '');
    setNumericValue(newValue);
  };

  return (
    <section id="addSection">
      <span>Register</span>
      <div className="selectionMenu flexbox">
        <div className="options flexbox">
          <div 
            onClick={() => handleLinkClick('expenses')} 
            className={` ${linkState == 'expenses' ? 'activeOp' : ''}`}
          >
            Expenses
          </div>
          <span className="line"></span>
          <div 
            onClick={() => handleLinkClick('income')} 
            className={` ${linkState == 'income' ? 'activeOp' : ''}`}
          >
            Income
          </div>
          <span className="line"></span>
          <div 
            onClick={() => handleLinkClick('transfer')} 
            className={` ${linkState == 'transfer' ? 'activeOp' : ''}`}
          >
            Transfer
          </div>
        </div>
      </div>
      <form className="formAdd flexbox">
        <div id="amountInput">
          <label htmlFor="amount">Currency</label>
          <input
            id='amount'
            name='amount'
            type="text"
            className={`${linkState}`}
            placeholder='0'
            value={numericValue}
            onChange={handleNumericInputChange}
          />
        </div>
        <FormSelection
          key={uuidv4()}
          id={'acc1'}
          name={'Account'}
          selections={['Banreservas', 'BHD', 'Popular', 'Add more']}
        />
        {linkState == 'transfer' ?
          <FormSelection
            key={uuidv4()}
            id={'acc2'}
            name={'Account'}
            selections={['Banreservas', 'BHD', 'Popular', 'Add more']}
          />
         :
         <FormSelection
            key={uuidv4()}
            id={'categoryFormId'}
            name={'Category'}
            selections={['Purchase', 'House', 'Transport', 'Add more']}
          />
        }
        <div className="formElement">
          <div className="formLabel">
            <i className='bx bx-calendar-x' ></i>
            Date
          </div>
          <div className='formIn'>
            Today, 6:02 pm
          </div>
        </div>
        <div className="formElement">
          <div className="formLabel">
            <i className='bx bx-note' ></i>
            Note
          </div>
          <div className='formIn'>
            <input type="text" id="note" name="note" placeholder='Add a note' />
          </div>
        </div>
        <button className='submitBtn' type="submit">Submit</button>
      </form>
    </section>
  )
}
