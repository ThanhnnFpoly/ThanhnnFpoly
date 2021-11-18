import React from "react";
import ClientNavbar from "components/navbars/ClientNavbar";
// reactstrap components
import {
  InputGroup,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import BookingCustom from "./index-sections/BookingCustom";
import BookingPet from "./index-sections/BookingPet";
function Booking() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("profile-page");
      return function cleanup() {
        document.body.classList.remove("profile-page");
      };
    });
   
return(
    
<div className="section"  
        >
<ClientNavbar />
<Container>

  <InputGroup>
  <Col className="ml-auto mr-auto" >
  <h1 className="text-center">Đăng ký khám</h1>
  <br/>
  <br/>
  <br/>
  <br/>
  <Row>
    
        <BookingCustom/>
        <BookingPet/>
        </Row>
        <br/>
        <br/>
        <Row>
            <Col className="ml-auto mr-auto" md="4">
              <Button className="btn-fill" color="danger" size="lg">
                Send 
              </Button>
            </Col>
          </Row>
        </Col>
        
        </InputGroup>
</Container>
</div>
);
}
export default Booking;