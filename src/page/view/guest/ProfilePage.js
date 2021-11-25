
import React from "react";

// reactstrap components
import {
  Button,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import AsideProfile from "./index-sections/AsideProfile";
// core components
// import ClientNavbar from "components/navbars/ClientNavbar";
// import ClientFooter from "components/footer/ClientFooter";
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
      <div className="section ">
        <Container>
          <Row md = "15">
        <Col className=" mr-auto" md="6">
          <div style={{textAlign:"center"}}>
            <div className="avatar">
              <img
                style={{height:"230px",width:"230px"}}
                src="https://tamanhhospital.vn/wp-content/uploads/2020/12/avt-bac-si-thanh-xuan.png"
              />
              
            </div>
            <br/>
            <div style={{textAlign:"center"}}>
              <h2 className="title">
                Bác sĩ 1
              </h2>
              <h3 className="description">Chuyên ngành: Xương Khớp</h3>
            </div>
          </div>
        
          </Col>
            <Col className=" mr-auto text-center"  md="6">
              <h3 className ="text-center"> Chọn thời gian bạn muốn</h3>
              <Col>
                <p> Chọn ngày</p>
              <select class="form-select form-select-sm" 
              aria-label=".form-select-sm example">
              <option value="">Hôm Nay</option>
              <option value="">Ngày Mai</option>
              <option value="">Ngày kia</option>
            </select>
            </Col>
              <br/>
              <a type="button" href="/booking"class="btn btn-primary">    
                 8:00-9:00 
              </a>{'  '}
              <a type="button" href="/booking"class="btn btn-primary" href="/booking">    
              9:00-10:00 
              </a>
              {'    '}
              <a type="button" href="/booking"class="btn btn-primary">    
              10:00-11:00 
              </a>
              <br/>
              <br/>
              <Col>
              <a type="button" href="/booking"class="btn btn-primary">    
              2:00-3:00 
              </a>
              {'    '}
              
              <a type="button" href="/booking"class="btn btn-primary">    
              3:00-4:00 
              </a>
              {'   '}
              <a type="button" href="/booking"class="btn btn-primary">    
              4:00-5:00 
              </a>
              
              </Col>
              
            </Col> 
            
            <Col md="6" ><br/>
              <h4> Địa chỉ khám:</h4>
              <br/>
              <h2><b> Phòng Khám 1 </b></h2>
              <p><b>Địa chỉ: 201 Cầu Giấy, Hà nội </b> </p>
            </Col> 
        <AsideProfile/>
          </Row>

        </Container>
      </div>
      {/* <ClientFooter /> */}
    </>
  );
}

export default ProfilePage;
