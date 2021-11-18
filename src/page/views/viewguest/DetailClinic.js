
import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ClientNavbar from "components/navbars/ClientNavbar.js";
import ProfilePageHeader from "components/headers/ProfilePageHeader.js";
import ClientFooter from "components/Footer/clientFooter";
import ProfileClinic from "views/viewguest/index-sections/profileclinic"


// import AsideProfile from "views/index-sections/AsideProfile";
function DetailClinic() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing");
    return function cleanup() {
      document.body.classList.remove("landing");
    };
  });
  return (
    <>
      <ClientNavbar />
      <ProfilePageHeader />
     {/* <AsideProfile/> */}
      <div className="section ">
        <Container>
          <Row md = "15">
        <Col className=" mr-auto ml-auto text-center" md="6">
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-thumbnail img-responsive"
                src={require("assets/img/pk2.jpg").default}
              />
              
            </div>
           
          </div>
        
          </Col>
            <Col className="mr-auto ml-auto"  md="4">
                  <Col>
                  <div className="name">
                  <h3 className="title">
                Phòng khám 1
              </h3>
              <h6 className="description"> Địa chỉ: 123 Trung hòa, Cầu giấy, Hà nội </h6>
            </div>
            <Button size="lg" color="info" href="/doctor">    
                 ĐẶT LỊCH KHÁM
              </Button>
              </Col>
            </Col>       
        <ProfileClinic/>
        
          </Row>

        </Container>
      </div>
      <ClientFooter />
    </>
  );
}

export default DetailClinic;
