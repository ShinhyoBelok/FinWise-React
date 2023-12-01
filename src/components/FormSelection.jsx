import React from 'react'

export default function FormSelection(props) {
  const {name, selections, id} = props

  return (
    <div className="formElement">
      <div className="formLabel">
        {id == 'categoryFormId' ?
          <i class='bx bx-category'></i>
          :
          <i className='bx bxs-bank'></i>
        }
        {name}
      </div>
      <div className="formIn">
        <select name={name.toLowerCase()} id={id}>
          {selections.map((select) => (
            <option value={`${select.toLowerCase()}`}>{select}</option>
          ))}
        </select> 
      </div>
    </div>
  )
}
