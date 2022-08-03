import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemCount = () => {

    const [contador, setContador] = useState(0);

    return (

    <Container>
     <Row className="justify-content-md-center">
     <Col className="gridText" md="auto">{ contador }</Col>
     </Row>
     <br />
    <Row className="justify-content-md-center">
      <Col xs lg="1">
        <Button onClick={() => {setContador ( contador-1) } } variant="danger">-</Button>
      </Col>
      <Col className="gridText" md="auto">Agregar al Carrito</Col>
      <Col xs lg="1">
        <Button onClick={() => {setContador ( contador+1) } } variant="primary">+</Button>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
    <Col xs lg="1">
    <Button onClick={() => {setContador (0) } } variant="primary">Restablecer</Button>
    </Col>
    </Row>
  </Container>
    )

}

export default ItemCount