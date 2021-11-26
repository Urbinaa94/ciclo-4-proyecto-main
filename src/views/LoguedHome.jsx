import React from 'react';
import { ReactDOM } from 'react';
import { SketchPicker } from 'react-color';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsChat } from "react-icons/bs"; 
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import {BsPersonCircle} from "react-icons/bs";
import '../views/LoguedHome.css';
import { Block } from '@mui/icons-material';
//import '/Ciclo 4/Trueque Mental/ciclo-4-proyecto-main/src/views/LoguedHome.css';
//import './LoguedHome.css';
//import '../LoguedHome.css';

class handleChangeComplete extends React.Component {
  state = {
    background: '#f3dbee',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    //require("./LoguedHome.css"); 
    return (
     <SketchPicker 
      color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
    />
  );
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

  <Row style= {{borderColor:"black", marginRight:"50px", marginLeft:"50px", marginBottom:"0px", paddingRight:"50px", paddingLeft:"50px", borderRadius:"100px"}}>
    <Col>
    <div class="boxa" style={{marginBottom:"30px"}}>
        <p1 style={{background:'white'}}>
          Número de posts
        </p1>
    </div>
    </Col>
  </Row>
  

  <Row>
    <Col>
    <div class="external"><div class="box1">
        <p2>
        widget hora de publicación
        </p2>
        <p>
        </p>
        <div class="divp3">
        <p3 style={{color:'blue', fontSize:"lg"}}>
          <BsPersonCircle></BsPersonCircle> Posteado por (usuario):
        </p3>
        </div>
        <p>
        Quiero aprender ():
        </p>
        <p>
        Enseño():
        </p> 
        <p style={{textAlign:'right'}}>
        <Button variant="warning">Ver más</Button>{''}
          <l>         </l>
            <Button variant="secondary">
                <BsFillBookmarkHeartFill></BsFillBookmarkHeartFill>
                favorito
            </Button>
            <l>         </l>
            <Button variant="secondary">
            <BsChat></BsChat>
            </Button>
        </p>
        </div></div>
    </Col>
    
  </Row>
</Container>
);
}