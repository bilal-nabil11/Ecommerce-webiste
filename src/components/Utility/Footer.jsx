import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import phone from "../../assets/images/phone.png";

const Footer = () => {
  return (
    <div className='footer pt-2'>
      <Container>
        <Row className=' d-flex justify-content-between align-items-center'>
          <Col sm='6' className='changeContent d-flex align-items-center '>
            <div className='footer-shroot '>الشروط والاحكام</div>
            <div className='footer-shroot mx-2'>سيايه الخصوصيه</div>
            <div className='footer-shroot mx-2'>اتصل بنا</div>
          </Col>
          <Col sm='6' style={{justifyContent: 'end'}} className='changeContent d-flex  align-items-center '>
            <div className='d-flex pt-3 '>
              <img width='20px' height='20px' src={phone} alt='' />
              <p className='footer-phone'>0122455346356</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width='20px' height='20px' src={facebook} alt='' />
            </div>
            <div style={{ cursor: "pointer" }} className=''>
              <img width='20px' height='20px' src={instagram} alt='' />
            </div>
            <div style={{ cursor: "pointer" }} className=''>
              <img width='20px' height='20px' src={twitter} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
