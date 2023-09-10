import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";

const FallBack = () => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Spinner animation="border" variant="light" />
    </Container>
  );
};

export default FallBack;
