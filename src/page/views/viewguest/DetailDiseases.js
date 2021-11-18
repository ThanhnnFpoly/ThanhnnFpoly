import React from "react";
import {
    Button,
    Card,
    Container,
    Row,
    Col,
  } from "reactstrap";
  import DetailDiseasesHeader from "components/headers/DetailDiseasesHeader"
import ClientNavbar from "components/navbars/ClientNavbar";
function DetailDiseases()
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
        <ClientNavbar />
        <DetailDiseasesHeader/>
        <div className="main">
        <div className="section text-center">
        <Container>
        <Row>
            
            <Col md="3">
                    <Card className="card-profile card-plain">
                    <div className="info">
                    <div className="card">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            src={
                              require("assets/img/faces/bs3.jpg")
                                .default
                            }
                          />
                        </a>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Bác sĩ 1</h4>
                        <p>
                        Duong Ruot
                        </p>
                        <Button className="btn-link" color="danger" href="/profile">
                          Booking
                        </Button>
                        
                        
                      </div>
                    </div>
                    </Card>
                  </Col>
                 
                  <Col md="3">
                    <Card className="card-profile card-plain">
                    <div className="info">
                    <div className="card">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            src={
                              require("assets/img/faces/bs3.jpg")
                                .default
                            }
                          />
                        </a>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Bác sĩ 2</h4>
                        <p>
                        Duong Ruot
                        </p>
                        <Button className="btn-link" color="danger" href="/profile">
                          Booking
                        </Button>
                        
                        
                      </div>
                    </div>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-profile card-plain">
                    <div className="info">
                    <div className="card">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            src={
                              require("assets/img/faces/bs3.jpg")
                                .default
                            }
                          />
                        </a>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Bác sĩ 3</h4>
                        <p>
                        Duong Ruot
                        </p>
                        <Button className="btn-link" color="danger" href="/profile-page">
                          Booking
                        </Button>
                        
                        
                      </div>
                    </div>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-profile card-plain">
                    <div className="info">
                    <div className="card">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            src={
                              require("assets/img/faces/bs3.jpg")
                                .default
                            }
                          />
                        </a>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Bác sĩ 4</h4>
                        <p>
                        Duong Ruot
                        </p>
                        <Button className="btn-link" color="danger" href="/profile-page">
                          Booking
                        </Button>
                        
                        
                      </div>
                    </div>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-profile card-plain">
                    <div className="info">
                    <div className="card">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            src={
                              require("assets/img/faces/bs3.jpg")
                                .default
                            }
                          />
                        </a>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Bác sĩ 5</h4>
                        <p>
                        Duong Ruot
                        </p>
                        <Button className="btn-link" color="danger" href="/profile-page">
                          Booking
                        </Button>
                        
                        
                      </div>
                    </div>
                    </Card>
                  </Col>
                  </Row>
                  </Container>
                  </div>
                  </div>
        </>
    );
}
export default DetailDiseases;