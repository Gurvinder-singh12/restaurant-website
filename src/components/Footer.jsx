import { Container, Row, Col } from "react-bootstrap"
const Footer=()=>{
return(
    <>
     <div className=" fs-6 footer">
      <div className="footer-text" >
         <p>Contact Us</p>
        <p>Location</p>
          <p>Call +01 1234567890</p>
 <p>demo@gmail.com</p>
      </div>
      <div className="footer-info">
          <h5 style={{textAlign:"center"}}>Apna Restaurant </h5>
        <p>Experience the vibrant atmosphere of our restaurants.<br/> 
        urself in the aroma of grilled delicacies.</p>
        </div>
        <div className="timing">
        <p>Opening Hours</p>
        <p>Everyday</p>
<p>10.00 Am -10.00 Pm</p>
</div>
      </div>
    {/* </div> */}
    </>
)
}
export default Footer