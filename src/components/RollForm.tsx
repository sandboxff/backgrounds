import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

type RollFormProps = {
    name: string,
    description: string,
}

function RollForm(props: RollFormProps) {
    const hasDescription = props.description.trim().length != 0 ? true : false
    return(
        <Container fluid className='d-flex flex-column h-75'>
            <Row className='justify-content-center d-flex align-items-center mh-20'>
                <Col className='col d-flex justify-content-center'>
                    <h2>{props.name}</h2>
                </Col>
            </Row>
            { hasDescription ? (
            <Row className='justify-content-center mx-4 d-flex align-items-center mh-20'>
                <Col className='col-8 d-flex justify-content-center'>
                <p className='m-4'>{props.description}</p>
                </Col>
            </Row>) : (<div></div>)}
        </Container>
    )
}

export default RollForm