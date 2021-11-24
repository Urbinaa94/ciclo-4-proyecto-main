import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsChat } from "react-icons/bs"; 
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { SketchPicker } from 'react-color';

class Component extends React.Component {
  state = {
    background: '#f3dbee',
  };

  render() {
    return <SketchPicker />;
  }
}

export function LoguedHome() {

    //botón de ver más debe llevar a perfil del otro usuario

return ( 

<Container>
  <Row>
    <Col> 
      <h1 style={{textAlign:'center', background:'#f3dbee'}}>
        ¿Cómo funciona? Perfectamente para tí 
      </h1>
    </Col>
  </Row>

  <Row>
    <Col>
      <p style={{background:'white'}}>
      Número de posts
      </p>
    </Col>
  </Row>
  
  <Row>
    <Col style={{background: 'white'}}>
        <p style={{textAlign:'right'}}>
        widget hora de publicación
        </p>
        <p style={{color:'blue'}}>
        <BsPersonCircle></BsPersonCircle> Posteado por (usuario):
        </p>
        <p>
        Quiero aprender ():
        </p>
        <p>
        Enseño():
        </p> 
        <p style={{textAlign:'right'}}>
        <Button variant="warning">Ver más</Button>{''}
            <Button variant="secondary">
                <BsFillBookmarkHeartFill></BsFillBookmarkHeartFill>
                favorito
            </Button>
            <Button variant="secondary">
            <BsChat></BsChat>
            </Button>
        </p>
    </Col>
  </Row>
</Container>
);
}