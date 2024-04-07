import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "../src/components/todoForm/Form"
import Tabs from './components/todoTabs/Tabs'
import Lists from './components/todoLists/Lists'
function App() {
  return (
    <div className='container'>
    <div className='app_title'>Todo App</div>
      <Form />  
      <Tabs />
      <Lists />
    </div>
  )
}

export default App
