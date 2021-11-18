
import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ClientNavbar from "components/navbars/ClientNavbar.js";
import LandingPageHeader from "components/headers/LandingPageHeader.js";
function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ClientNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
          <h2 className="title"><b>Danh sách phòng khám</b></h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="/clinic"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
            <Row>
            </Row>
            <Row>
              <Col md="3">
              <Card className="card-profile card-plain">
                <div className="info">
                <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk2.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 1</h4>
                    <p className="description">
                      120 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col>
              <Col md="3">
              <Card className="card-profile card-plain">
                <div className="info">
                <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk6.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 2</h4>
                    <p>
                    121 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card-avatar">
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
              <Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/pk5.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phòng khám 4</h4>
                    <p>
                     300 Hồ Tùng Mậu, Cầu Giấy, Hà Nội
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
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title"><b>Danh sách bác sĩ</b></h2>
            <Button
                  className="btn-round"
                  color="warning"
                  href="/doctor"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/faces/bs2.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Bác sĩ 3</CardTitle>
                        <h6 className="card-category">Cốt sống</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/faces/bs3.jpg").default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Bác sĩ 1</CardTitle>
                        <h6 className="card-category">Xương Khớp</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/faces/bs4.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Bác sĩ 2</CardTitle>
                        <h6 className="card-category">Thần kinh</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      
                    </p>

                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
          <Row>
          <div className="section text-center">
          <Container>
          <h2 className="title"><b>Một số loại bệnh cơ bản</b></h2>
                <h5 className="description">
                  
                </h5>
                <Button
                  className="btn-round"
                  color="info"
                  href="/diseases"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
            <Row>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
              <Card className="card-profile card-plain">
                <div className="info">
                <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        className="img-thumbnail img-responsive"
                        alt="..."
                        src={
                          require("assets/img/poodle.jpg")
                            .default
                        }
                      
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Bệnh viêm dạ dày - Đường ruột</h4>
                    <p className="description">
                    Các chú chó poodle bị bệnh này sẽ có các biểu hiện như:
                     biếng ăn, sốt cao kèm theo các cơn co giật cơ thể.
                    
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
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
                      className="img-thumbnail img-responsive"
                        alt="..."
                        src={
                          require("assets/img/poodle.jpg")
                            .default
                        }
                        
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">BỆNH ADDISON</h4>
                    <p>
                    Những bé poodle bị mắc phải bệnh Addison,
                     nguyên nhân gây ra bệnh này là do tuyến thượng thận không sản sinh ra
                      đủ lượng hoocmon cortiso.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                <div className="info">
                <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/poodle.jpg")
                            .default
                        }
                        className="img-thumbnail img-responsive"
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">BỆNH HO CŨI</h4>
                    <p>
                    Chúng rất thường hay bị mắc phải bệnh ho cũi hoặc nghiêm trọng hơn là các bệnh như viêm phổi, viêm phế quản.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
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
                          require("assets/img/poodle.jpg")
                            .default
                        }
                        className="img-thumbnail img-responsive"
                      />
                    </a>
                  </div>
                  <div className="description">
                    <h4 className="info-title">BỆNH VIÊM DA CÓ MỦ</h4>
                    <p>
                    Vùng da bị viêm chảy mủ vàng, lông thì bết lại thành cục,
                     dễ gãy rụng, khiến chó bị ngứa nghiêm trọng.
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
  </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
