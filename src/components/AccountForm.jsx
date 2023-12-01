import React, {useState} from 'react'
import './styles/AccountForm.css'

export default function AccountForm() {
  const [numericValue, setNumericValue] = useState('');

  const handleNumericInputChange = (event) => {
    const newValue = event.target.value.replace(/[^0-9.]/g, '');
    setNumericValue(newValue);
  }
  return (
    <section id="addSection">
      <span>Accounts</span>
      <form className="formAdd flexbox">
        <div className="formElement">
          <div className="formLabel">
            <i className='bx bxs-bank'></i>
            <label htmlFor="accountName">Name</label>
          </div>
          <input type="text" className='textType' name="accountName" placeholder='Account name'/>
        </div>
        <div className="formElement">
          <div className="formLabel">
            <i class='bx bx-money'></i>
            <label htmlFor="amount">balance</label>
          </div>
          <input
            id='amount'
            name='amount'
            type="text"
            placeholder='0'
            className='textType'
            value={numericValue}
            onChange={handleNumericInputChange}
          />
        </div>
        <div className="formElement">
          <div className="formLabel">
           <i class='bx bx-coin' ></i>
            Currency
          </div>
          <div className="formIn">
            <select name='currencyType'>
              <option value='dop'>DOP</option>
              <option value='usd'>USD</option>
              <option value='eur'>EUR</option>
            </select> 
          </div>
        </div>
        <div className="formElement">
          <div className="formLabel">
            <i class='bx bx-coin-stack'></i>
            Type
          </div>
          <div className="formIn">
            <select name='type'>
              <option value='cash'>Cash</option>
              <option value='savings account'>Saving account</option>
              <option value='credit card'>Credit card</option>
            </select> 
          </div>
        </div>
        {/* <div className="formElement">
          <div className="formLabel">
            <i class='bx bx-category'></i>
            <label for="colorPicker">Choose a color:</label>
          </div>
          <div className="formIn">
          <select id="colorPicker">
            <option value="red" style={{ backgroundColor: 'red' }}>Red</option>
            <option value="blue" style={{ backgroundColor: 'blue' }}>Blue</option>
            <option value="green" style={{ backgroundColor: 'green' }}>Green</option>
            <option value="yellow" style={{ backgroundColor: 'yellow' }}>yellow</option>
            <option value="orange" style={{ backgroundColor: 'orange' }}>Orange</option>
            <option value="purple" style={{ backgroundColor: 'purple' }}>purple</option>
          </select>
          </div>
        </div> */}
        <button className='submitBtn' type="submit">Submit</button>
      </form>
    </section>
  )
}
