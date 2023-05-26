import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Formulario = () => {
  return (
    <Container className="pt-4 px-3">
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="email" placeholder="Ingese su nombre" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su apellido" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>DNI</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su dni" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" />
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
