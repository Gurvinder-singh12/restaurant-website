import { Container, Row, Col } from "react-bootstrap"
const Footer=()=>{
return(
    <>
     <div className=" fs-6 bg-black text-white footer">
      <Row className="footer-text" >
        <Col md={4}> <p>Contact Us</p></Col>
        <Col md={4}><p>Apna Restaurant </p></Col>
        <Col md={4}><p>Opening Hours</p></Col>
      </Row>
      <Row className="footer-info">
        <Col md={4}> <p>Location</p>
 <p>Call +01 1234567890</p>
 <p>demo@gmail.com</p></Col>
        <Col md={4}>
        <p>Experience the vibrant atmosphere of our restaurants. 
        Immerse yourself in the aroma of grilled delicacies.</p>
        </Col>
        <Col md ={4}>
        <p>Everyday</p>
<p>10.00 Am -10.00 Pm</p></Col>
      </Row>
    </div>
    </>
)
}
export default Footer