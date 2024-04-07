import React from 'react'
import './todolist.css'
import Editicon from "../icons/EditIcon"
import DeleteIcon from "../icons/DeleteIcon"
import CheckIcon from "../icons/CheckIcon"
const Lists = () => {
  return (
    <div className='list_container'>
      <ul className='list_items'>
        <li className='list_item'>
          <div className='list_title'>
          <CheckIcon/> 
          Crud
          </div>
          <div className='item_actions'>
            <span title='Edit'>
              <Editicon />
            </span>
            <span title='Del'><DeleteIcon /></span>

            <span title='Del'></span>
          </div>
        </li>



      </ul>
    </div>
  )
}

export default Lists
