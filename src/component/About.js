import React , {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Container,Row,Col,Alert} from 'react-bootstrap';

function About() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    if (name !== ''){
      setShow(true)
    }
    else{
      setShow(false)
    }
  },[name]);

  return (
    <Container className='Container'>
      <Row className="justify-content-center" >
        <Col xs lg="3">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> <h5> Kindly enter your name. </h5></Form.Label>
              <Form.Control className='list-input' type="text" placeholder="Enter name .." onChange={(e) => { setName(e.target.value);}} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      {show ? <Alert variant="primary" className='alert'>
        <Alert.Heading>Hey, {name} nice to see you !</Alert.Heading>
        <p>
          Aww yeah, Welcome to my #My-Dashboard.<br></br>
          #My-Dashboard is about me , it's my personal space .. <br></br>
          hope you enjoy  💕.
        </p>
        <hr />
        <p className="mb-0">
        </p></Alert>
        : '' }
    </Container>
  );
}

export default About;
