import { Form, Button, Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [datos, setDatos] = useState([]);


  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDatos([...datos, nombre, apellido, dni, email]);
    setNombre("");
    setApellido("");
    setDni("");
    setEmail("");
    if (nombre && apellido && dni && email) {
      Swal.fire("Se enviaron los datos");
    } else {
      Swal.fire("Faltan campos por llenar");
    }
  };

  return (
    <Container className="pt-4 px-3">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingese su nombre"
                value={nombre}
                onChange={(e) => handleInputChange(e, setNombre)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido"
                value={apellido}
                onChange={(e) => handleInputChange(e, setApellido)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="dni">
              <Form.Label>DNI</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su dni"
                value={dni}
                onChange={(e) => handleInputChange(e, setDni)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center justify-content-sm-end">
          <Button variant="primary" className="px-5" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Formulario;
