import { useState } from 'react'
import backgorunds from './data/backgrounds.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [background, setBackground] = useState('???')
  const [disable, setDisable] = useState(false)

  const getRandomBackground = (i: number) => {
    setTimeout(()=>{let bg = backgorunds[Math.floor(Math.random() * backgorunds.length)]
      if (bg.length > 0) 
      {
        bg = bg.toLocaleUpperCase()
      }
      setBackground(bg)}
      , Math.pow(i, 2) )
      
  }
  const rollBackground = () => {
    setDisable(true)
    for (let i = 0; i < 100; i++) {
      getRandomBackground(i)
    }
    setTimeout(() => setDisable(false), 10000)
  }

  return (

    <Container>
      <Row className='g-0 d-flex justify-content-center align-items-center min-vh-100'>
        <Row className='justify-content-center'>
          <Col className='col d-flex justify-content-center'>
            <h2>{background}</h2>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col className='col-2 d-flex justify-content-center'>
            <button className="btn btn-primary" onClick={() => rollBackground()} disabled={disable}>
              ROLL
            </button>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default App
