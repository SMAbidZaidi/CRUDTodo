import React from 'react'
import './todoform.css'
const Form = () => {
  return (
    <div className='form_container'>
      <form method='post'>
        <div className='form_wrapper'>
          <div className='form_input_row'>
            <input placeholder='Write todo here' className='taskinput' type='text' />
          </div>
          <div >
            <button className='add_btn'>
              Add</button></div>
        </div>

      </form>
    </div>
  )
}

export default Form
