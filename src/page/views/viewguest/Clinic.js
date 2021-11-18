import React from "react";
import ClientNavbar from "components/navbars/ClientNavbar.js";
import {
    Button,
    Card,
    Container,
    Row,
    Col,
  } from "reactstrap";
  import ClinicHeader from "components/headers/ClinicHeader"
function Clinic()
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
        <ClinicHeader/>
        <div className="main">
        <div className="text-center">
          <Container>
          <h2 className="title"><b>Danh sách phòng khám</b></h2>
        <Row>
            
        <Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 3</h4>
                    <p>
                    230 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col><Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 3</h4>
                    <p>
                    230 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="/detailclinic">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col><Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 3</h4>
                    <p>
                    230 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col><Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 3</h4>
                    <p>
                    230 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col><Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 3</h4>
                    <p>
                    230 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col><Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 3</h4>
                    <p>
                    230 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col><Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 3</h4>
                    <p>
                    230 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col><Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 3</h4>
                    <p>
                    230 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col><Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 3</h4>
                    <p>
                    230 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col><Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 3</h4>
                    <p>
                    230 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col><Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 3</h4>
                    <p>
                    230 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col><Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 3</h4>
                    <p>
                    230 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
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
export default Clinic;