import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
import toast, { Toaster } from "react-hot-toast";
import useBebidas from "../hooks/useBebidas";

const Formulario = () => {
  const { categorias } = useCategorias();
  const { consultarBebida } = useBebidas();

  const [busqueda, setBusqueda] = useState({ nombre: "", categoria: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    consultarBebida(busqueda);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Toaster />
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. Tequila, Vodka, etc"
              name="nombre"
              id="nombre"
              value={busqueda.nombre}
              onChange={(e) =>
                setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"
              value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
              }
            >
              <option value="">- Selecciona Categoria -</option>
              {categorias.map((categoria) => (
                <option
                  value={categoria.strCategory}
                  key={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button type="submit" variant="danger" className="w-100">
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
