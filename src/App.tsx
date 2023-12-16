import { useEffect, useState } from 'react'
import backgorunds from './data/backgrounds.json'
import feats from './data/feats.json'
import flaws from './data/flaws.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

import RollForm from './components/RollForm';
import './App.css'

type characterItem = {
  id: number,
  name: string,
  effect: string
}

function App() {

  const [mode, setMode] = useState('')
  const [repeatSwitch, setRepeatSwitch] = useState(false)
  const [name, setName] = useState('???')
  const [description, setDescription] = useState('')
  const [disable, setDisable] = useState(false)

  useEffect(() => {
    if (mode != '') {
      setDisable(true)
      for (let i = 0; i < 100; i++) {
        setTimeout(() => setState(), Math.pow(i, 2))
      }
      setTimeout(() => setDisable(false), 10000)
    }
  }, [mode, repeatSwitch])

  const getRandomItem = (collection: Array<string> | Array<characterItem>) => {
    let randomIndex = Math.floor(Math.random() * backgorunds.length)
    return collection[randomIndex]
  }

  const setState = () => {
    switch (mode) {
      case 'backgrounds':
      {
        const randomItem = getRandomItem(backgorunds) as string
        setName(randomItem.toLocaleUpperCase())
        setDescription('')
        break
      }
      case 'feats':
      {
        const randomItem = getRandomItem(feats.feats) as characterItem
        setName(randomItem.name.toLocaleUpperCase())
        setDescription(randomItem.effect)
        break
      }
      case 'flaws':
      {
        const randomItem = getRandomItem(flaws.flaws) as characterItem
        setName(randomItem.name.toLocaleUpperCase())
        setDescription(randomItem.effect)
        break
      }
      default:
    }
  }

  const rollHandler = (newMode: 'backgrounds' | 'feats' | 'flaws') => {
    if (mode === newMode) {
      setRepeatSwitch(!repeatSwitch)
    }
    else {
      setMode(newMode)
    }
  }

  return (
    <>
      <RollForm name={name} description={description}>
      </RollForm>
    <Container fluid className='d-flex flex-column h-25'>
      <Row className='justify-content-center d-flex align-items-center mh-20'>
        <div className="btn-toolbar justify-content-center">
          
          <button className="col-2 mx-4 btn btn-secondary" onClick={() => rollHandler('backgrounds')} disabled={disable}>Background</button>
          <button className="col-2 mx-4 btn btn-secondary" onClick={() => rollHandler('feats')} disabled={disable}>Feat</button>
          <button className="col-2 mx-4 btn btn-secondary" onClick={() => rollHandler('flaws')} disabled={disable}>Flaw</button>
        </div>
      </Row>
    </Container>
    </>  
  )
}

export default App
