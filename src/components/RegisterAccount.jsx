import React from 'react'
import './styles/registerAccount.css'

export default function RegisterAccount() {
  return (
    <section id="addSection">
      <span>Register</span>
      <div className="selectionMenu flexbox">
        <div className="options flexbox">
          <div>Expenses</div>
          <span className="line"></span>
          <div>Income</div>
          <span className="line"></span>
          <div>Transfer</div>
        </div>
      </div>
      <form className="formAdd flexbox">
        <div className="formElement">
          <div className="formLabel">
            <i className='bx bxs-bank'></i>
            Account
          </div>
          <div className="formIn">
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select> 
          </div>
        </div>
        <div className="formElement">
          <div className="formLabel">
            <i className='bx bx-category-alt'></i>
            Category
          </div>
          <div className="formIn">
            <label for="cars"></label>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select> 
          </div>
        </div>
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
      </form>
    </section>
  )
}
