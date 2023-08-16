/* eslint-disable react/prop-types */
import useBebidas from "../hooks/useBebidas";
import { Card, Col, Button } from "react-bootstrap";
const Bebida = ({ bebida }) => {
  const { handleModalClick, handleBebidaIdClick } = useBebidas();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de la Bebida ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button
            variant="danger"
            className="w-100 mt-2"
            onClick={() => {
              handleModalClick();
              handleBebidaIdClick(bebida.idDrink);
            }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
