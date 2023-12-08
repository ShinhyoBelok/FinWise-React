import React from 'react'
import './styles/addCategory.css'
import CategoryLi from '../components/CategoryLi';
import { v4 as uuidv4 } from 'uuid';

export default function AddCategory() {
  return (
    <section id="addSection">
      <span>Add Category</span>
      <form className="formLabel categotyLi inCategory">
        <div>
          <i class='bx bx-plus-circle'></i>
          <input type="text" placeholder='Category name' className='inputText'/>
        </div>
        <button className='submitBtn' type="submit">Add</button>
      </form>
      <ul className="ulList flexbox">
        <CategoryLi />
        <CategoryLi />
        <CategoryLi />
        <CategoryLi />
        <CategoryLi />
        <CategoryLi />
      </ul>
    </section>
  )
}
