import React,{FC}from 'react'
import Button from '@mui/material/Button'
import {Header} from './components'
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'


const App: FC = () => {
  return (
    <div>
      <Router>
        <Header />
      </Router>
      
    </div>
  )
}

export default App
