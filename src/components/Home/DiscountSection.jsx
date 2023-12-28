import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import laptops from "../../assets/images/laptops.png";

const DiscountSection = () => {
  return (
    <Container>
      <Row className='discount-backcolor my-3  mx-2 d-flex text-center align-items-center'>
        <Col sm='6'>
          <div className='discount-title'>خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب</div>
        </Col>
        <Col sm='6'>
          <img className='discount-img' src={laptops} alt='' />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
