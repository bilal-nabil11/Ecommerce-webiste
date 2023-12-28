import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  CategoryHeader,
  CardProductsContainer,
  Pagination,
  SideFilter,
  SearchCountResult,
} from "../../components";

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
        <CategoryHeader />
      <Container>
        <SearchCountResult title='400 نتجية بحث' />
        <Row className='d-flex flex-row'>
          <Col sm='2' xs='2' md='1' className='d-flex'>
            <SideFilter />
          </Col>
          <Col sm='10' xs='10' md='11'>
            <CardProductsContainer title='' btntitle='' />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
