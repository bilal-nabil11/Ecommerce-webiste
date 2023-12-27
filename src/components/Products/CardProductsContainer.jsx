import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { SubTiltle, ProductCard } from "../index";

const CardProductsContainer = () => {
  return (
    <Container>
      <SubTiltle title='الأكثر مبيعا' btntitle='المزيد' pathText='/allcategory' />
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
