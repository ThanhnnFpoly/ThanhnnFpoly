import React from "react";
// import ClientNavbar from "components/navbars/ClientNavbar.js";
import {
    Button,
    Card,
    Container,
    Row,
    Col,
  } from "reactstrap";

  // import DoctorHeader from "components/headers/DoctorHeader";
function Doctor ()
{  
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("profile-page");
      return function cleanup() {
        document.body.classList.remove("profile-page");
      };
    });
   
    return(
        <>
        {/* <ClientNavbar /> */}
        {/* <DoctorHeader/> */}
        <div className="main">
        <div className="section text-center">
          <Container>
          <h1 className="title"><b>Danh sách bác sĩ </b></h1>
          <br/>
        <Row>
        <Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="/profile" onClick={(e) => e.preventDefault()}>
                      <img src="https://tamanhhospital.vn/wp-content/uploads/2020/12/avt-bac-si-thanh-xuan.png"/>
                    </a>
                  </div>
                  <div className="description">
                    <h3 className="info-title">Bác sĩ 1</h3>
                    <p>
                Chuyên ngành: Xương khớp
                    </p>
                    <p>
                    <a type="button" class="btn btn-outline-success" href="/profile">
                      Đặt khám
                    </a>
                    </p>
                  </div>
                </div>
                </Card>
              </Col>     
              <Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="/profile" onClick={(e) => e.preventDefault()}>
                      <img src="https://tamanhhospital.vn/wp-content/uploads/2020/12/avt-bac-si-thanh-xuan.png"/>
                    </a>
                  </div>
                  <div className="description">
                    <h3 className="info-title">Bác sĩ 1</h3>
                    <p>
                Chuyên ngành: Xương khớp
                    </p>
                    <p>
                    <a type="button" class="btn btn-outline-success" href="/profile">
                      Đặt khám
                    </a>
                    </p>
                  </div>
                </div>
                </Card>
              </Col> 
              <Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="/profile" onClick={(e) => e.preventDefault()}>
                      <img src="https://tamanhhospital.vn/wp-content/uploads/2020/12/avt-bac-si-thanh-xuan.png"/>
                    </a>
                  </div>
                  <div className="description">
                    <h3 className="info-title">Bác sĩ 1</h3>
                    <p>
                Chuyên ngành: Xương khớp
                    </p> <p>
                    <a type="button" class="btn btn-outline-success" href="/profile">
                      Đặt khám
                    </a>
                   </p>
                  </div>
                </div>
                </Card>
              </Col> 
              <Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="/profile" onClick={(e) => e.preventDefault()}>
                      <img src="https://tamanhhospital.vn/wp-content/uploads/2020/12/avt-bac-si-thanh-xuan.png"/>
                    </a>
                  </div>
                  <div className="description">
                    <h3 className="info-title">Bác sĩ 1</h3>
                    <p>
                Chuyên ngành: Xương khớp
                    </p> <p>
                    <a type="button" class="btn btn-outline-success" href="/profile">
                      Đặt khám
                    </a>
                    </p>
                  </div>
                </div>
                </Card>
              </Col>  
              </Row>
              <div className="items-center">
       
      </div>
           
              </Container>
              </div>
              
              </div>
              
        </>
    );
}
export default Doctor;