import { useState } from 'react'
import backgorunds from './data/backgrounds.json'
import 'bootstrap/dist/css/bootstrap.min.css';

import RollForm from './components/RollForm';
import './App.css'

function App() {
  const [name, setName] = useState('???')
  const [description, setDescription] = useState('')
  const [disable, setDisable] = useState(false)

  const getRandomBackground = () => {
    let bg = backgorunds[Math.floor(Math.random() * backgorunds.length)]
    if (bg.length > 0) 
    {
      bg = bg.toLocaleUpperCase()
    }
    setName(bg)
      
  }
  const rollBackground = () => {
    setDisable(true)
    for (let i = 0; i < 100; i++) {
      setTimeout(() => getRandomBackground(), Math.pow(i, 2))
    }
    setTimeout(() => setDisable(false), 10000)
  }

  return (
    <RollForm name={name} description={description} rollFunction={()=>rollBackground()} isDisabled={disable}>
    </RollForm>
  )
}

export default App
