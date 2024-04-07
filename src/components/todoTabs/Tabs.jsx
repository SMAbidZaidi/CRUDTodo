import React from 'react'
import './tabs.css'

const Tabs = () => {
  return (
    <div className='tabs_container'>
      <ul className='tabs_list'>
        <li className='active'>All</li>
        <li>Active</li>
        <li>Complete</li>
      </ul>
    </div>
  )
}

export default Tabs
