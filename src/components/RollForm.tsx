import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

type RollFormProps = {
    name: string,
    description: string,
    rollFunction: React.MouseEventHandler<HTMLButtonElement>,
    isDisabled: boolean
}

function RollForm(props: RollFormProps) {
    const hasDescription = props.description.trim().length != 0 ? true : false
    return(
        <Container fluid className='d-flex flex-column h-100'>
            <Row className='justify-content-center d-flex align-items-center mh-20'>
                <Col className='col d-flex justify-content-center'>
                    <h2>{props.name}</h2>
                </Col>
            </Row>
            { hasDescription ? (
            <Row className='justify-content-center d-flex align-items-center mh-20'>
                <Col className='col d-flex justify-content-center'>
                <h2>{props.description}</h2>
                </Col>
            </Row>) : (<div></div>)}
            <Row className='justify-content-center d-flex align-items-center mh-20'>
                <Col className='col-2 d-flex justify-content-center'>
                    <button className="btn btn-primary" onClick={props.rollFunction} disabled={props.isDisabled}>
                    ROLL
                    </button>
                </Col>
            </Row> 
        </Container>
    )
}

export default RollForm