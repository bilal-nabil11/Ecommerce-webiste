import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { SubTiltle, ProductCard } from "../index";

const CardProductsContainer = ({ title, btntitle, pathText }) => {
  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className='my-2 d-flex justify-content-between'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
