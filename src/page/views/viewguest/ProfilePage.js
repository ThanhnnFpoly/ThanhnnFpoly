
import React from "react";

// reactstrap components
import {
  Button,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import AsideProfile from "../viewguest/index-sections/AsideProfile";
// core components
import ClientNavbar from "components/navbars/ClientNavbar";
import ProfilePageHeader from "components/headers/ProfilePageHeader";
import ClientFooter from "components/footer/ClientFooter";
// import AsideProfile from "views/index-sections/AsideProfile";
function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

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
        <Col className=" mr-auto" md="6">
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-thumbnail img-responsive"
                src={require("assets/img/faces/bs3.jpg").default}
              />
            </div>
            <div className="name">
              <h3 className="title">
                Bác sĩ 1
              </h3>
              <h6 className="description">Chuyên ngành: Xương Khớp</h6>
            </div>
          </div>
        
          </Col>
            <Col className=" mr-auto text-center"  md="6">
              <h3 className ="text-center"> Chọn thời gian bạn muốn</h3>
              <Col sm="6">
                <p> Chọn ngày</p>
                <InputGroup className="date" id="datetimepicker">
              <select>
              <option value="">Hôm Nay</option>
              <option value="">Ngày Mai</option>
              <option value="">Ngày kia</option>
            </select>
              </InputGroup>
              </Col>
              <br/>
              <Button size="mn" color="info" outline href="/booking">    
                 8:00 AM - 9:00 AM
              </Button>{'  '}
              <Button size="mn" color="info" outline href="/booking">    
              9:10 AM - 10:00 AM
              </Button>
              {'    '}
              <Button size="mn" color="info" outline href="/booking">    
              10:20 AM - 11:00 AM
              </Button>
              <br/>
              <br/>
              <Col>
              <Button size="mn" color="info" outline href="/booking">    
              2:00 PM - 3:00 PM
              </Button>
              {'    '}
              
              <Button size="mn" color="info" outline href="/booking">    
              3:20 PM - 4:00 PM
              </Button>
              {'   '}
              <Button size="mn" color="info" outline href="/booking">    
              4:30 PM - 5:00 PM
              </Button>
              
              </Col>
              
            </Col> 
            <Col>
              <h5> ĐỊA CHỈ KHÁM</h5>
              <h6> Phòng Khám 1</h6>
              <p><b>123 trung hoa, Cau Giay, Ha Noi</b> </p>
            </Col> 
        <AsideProfile/>
          </Row>

        </Container>
      </div>
      <ClientFooter />
    </>
  );
}

export default ProfilePage;
