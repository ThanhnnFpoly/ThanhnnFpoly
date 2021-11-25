import React from "react";
// import ClientNavbar from "components/navbars/ClientNavbar.js";
import {
    Button,
    Card,
    Container,
    Row,
    Col,
  } from "reactstrap";

  // import DiseasesHeader from "components/headers/DiseasesHeader";
function Diseases ()
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
        {/* <DiseasesHeader/> */}
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
                    <a href="/detailsicker" onClick={(e) => e.preventDefault()}>
                      <img src="https://media.baodansinh.vn/baodansinh/Images/2016/07/30/vuhuongth/cho2.jpg"/>
                    </a>
                  </div>
                  <div className="description">
                    <h3 className="info-title">Loại bệnh 1</h3>
                    <p>
                
                    </p>
                    <p>
                    <a type="button" class="btn btn-outline-success" href="/detailsicker">
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
                    <a href="/detailsicker" onClick={(e) => e.preventDefault()}>
                      <img src="https://media.baodansinh.vn/baodansinh/Images/2016/07/30/vuhuongth/cho2.jpg"/>
                    </a>
                  </div>
                  <div className="description">
                    <h3 className="info-title">Loại bệnh 1</h3>
                    <p>
                
                    </p>
                    <p>
                    <a type="button" class="btn btn-outline-success" href="/detailsicker">
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
                    <a href="/detailsicker" onClick={(e) => e.preventDefault()}>
                      <img src="https://media.baodansinh.vn/baodansinh/Images/2016/07/30/vuhuongth/cho2.jpg"/>
                    </a>
                  </div>
                  <div className="description">
                    <h3 className="info-title">Loại bệnh 1</h3>
                    <p>
                
                    </p> <p>
                    <a type="button" class="btn btn-outline-success" href="/detailsicker">
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
                    <a href="/detailsicker" onClick={(e) => e.preventDefault()}>
                      <img src="https://media.baodansinh.vn/baodansinh/Images/2016/07/30/vuhuongth/cho2.jpg"/>
                    </a>
                  </div>
                  <div className="description">
                    <h3 className="info-title">Loại bệnh 1</h3>
                    <p>
                
                    </p> <p>
                    <a type="button" class="btn btn-outline-success" href="/detailsicker">
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
export default Diseases;