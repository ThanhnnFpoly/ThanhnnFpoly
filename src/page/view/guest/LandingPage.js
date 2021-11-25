
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
function LandingPage() {
  // document.documentElement.classList.remove("nav-open");
  // React.useEffect(() => {
  //   document.body.classList.add("profile-page");
  //   return function cleanup() {
  //     document.body.classList.remove("profile-page");
  //   };
  // });
  return (
    <>
  <div>
      <div style={{backgroundColor:"#f8f9fb"}}>
        <Container>
          <div className="text-center" style={{ borderBottom: "1px solid" }}>

            <h1 className="title"><b>Top phòng khám</b></h1>

            <br />
            <a role="button" class="btn btn-info" href="/clinic"
            // 
            >
              Xem tất cả
            </a>

            <Row>
              <div >
                <br />
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="/detailclinic" >
                        <img
                          alt="..."
                          src="https://ohay.vn/blog/wp-content/uploads/2020/04/tyhn3.jpg"
                          style={{ width: "200px", height: "210px" }}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="/detailclinic">
                        <div className="author">
                          <CardTitle tag="h3">Phòng khám 2</CardTitle>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        <a type="button" class="btn btn-primary"
                              href="/detailclinic"
                        >

                          Đặt khám
                        </a>
                      </p>

                    </CardBody>

                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="/detailclinic" >
                        <img
                          alt="..."
                          src="https://ohay.vn/blog/wp-content/uploads/2020/04/tyhn3.jpg"
                          style={{ width: "200px", height: "210px" }}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="/detailclinic" >
                        <div className="author">
                          <CardTitle tag="h3">Phòng khám 1</CardTitle>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        <a type="button" class="btn btn-primary"
                          href="/detailclinic"
                        >
                          Đặt khám
                        </a>
                      </p>

                    </CardBody>

                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="/detailclinic" >
                        <img
                          alt="..."
                          src="https://ohay.vn/blog/wp-content/uploads/2020/04/tyhn3.jpg"
                          style={{ width: "200px", height: "210px" }}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="/detailclinic" >
                        <div className="author">
                          <CardTitle tag="h3">Phòng khám 3</CardTitle>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        <a type="button" class="btn btn-primary" href="/detailclinic">
                          Đặt khám
                        </a>
                      </p>

                    </CardBody>

                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="/detailclinic" >
                        <img
                          alt="..."
                          src="https://ohay.vn/blog/wp-content/uploads/2020/04/tyhn3.jpg"
                          style={{ width: "200px", height: "210px" }}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="detailclinic" >
                        <div className="author">
                          <CardTitle tag="h3">Phòng khám 4</CardTitle>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        <a type="button" class="btn btn-primary" href="/detailclinic"
                        >

                          Đặt khám
                        </a>
                      </p>

                    </CardBody>

                  </Card>
                </Col>
              </div>
            </Row>

          </div>
        </Container>
        <br />
        <div className="section section-dark text-center" >
          <Container style={{ borderBottom: "1px solid" }}>
            <h1 className="title"><b>Danh sách bác sĩ</b></h1>
            <br />
            <a role="button" class="btn btn-info"
              href="/doctor">
              Xem tất cả
            </a>

            <Row>

              <div>
                <br />
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="detailclinic" >
                        <img
                          alt="..."
                          src="https://img.medlatec.vn/ImagePath/imagesDoctor/20190909/20190909_BS-nguyen-cong-duy-C%C4%90HA.jpg"
                          style={{ width: "200px", height: "210px" }}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="detailclinic" >
                        <div className="author">
                          <CardTitle tag="h3">Bác sĩ 2</CardTitle>
                          <h4 className="card-category">Bệnh điều trị: Thần kinh</h4>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        <a type="button" class="btn btn-primary"
                          href="/detailclinic"
                        >
                          Đặt khám
                        </a>
                      </p>

                    </CardBody>

                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="detailclinic" >
                        <img alt="..." style={{ width: "200px", height: "210px" }} src="https://img.medlatec.vn/ImagePath/imagesDoctor/20190909/20190909_BS-nguyen-cong-duy-C%C4%90HA.jpg" />
                      </a>
                    </div>
                    <CardBody>
                      <a href="detailclinic" >
                        <div className="author">
                          <CardTitle tag="h3">Bác sĩ 1</CardTitle>
                          <h4 className="card-category">Bệnh điệu trị: Xương Khớp</h4>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        <a type="button" class="btn btn-primary">
                          Đặt khám
                        </a>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="detailclinic" >
                        <img
                          alt="..."
                          src="https://img.medlatec.vn/ImagePath/imagesDoctor/20190909/20190909_BS-nguyen-cong-duy-C%C4%90HA.jpg"
                          style={{ width: "200px", height: "210px" }}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="detailclinic" >
                        <div className="author">
                          <CardTitle tag="h3">Bác sĩ 2</CardTitle>
                          <h4 className="card-category">Bệnh điều trị: Thần kinh</h4>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        <a type="button" class="btn btn-primary"
                          
                        >
                          Đặt khám
                        </a>
                      </p>

                    </CardBody>

                  </Card>
                </Col>
              </div>
            </Row>

          </Container>
        </div>
        <br />
        <div className="section landing-section">
          <Container>
            <Row>
              <div className="section text-center">
                <Container>
                  <h1 className="title"><b>Một số loại bệnh cơ bản</b></h1>
                  <br />
                  <a
                    type="button" class="btn btn-primary"
                    href="/diseases"
                    
                  >
                    Xem tất cả
                  </a>
                  <Row>
                  </Row>
                  <br />
                  <br />
                  <Row>
                  <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="detailclinic" >
                        <img
                          alt="..."
                          src="https://phongkhamthuyvinhlocvet.com/uploads/source/dich-vu/15.png"
                          style={{ width: "200px", height: "210px" }}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="detailclinic" >
                        <div className="author">
                          <CardTitle tag="h3">Loại bệnh 5</CardTitle>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        <a type="button" class="btn btn-primary"
                        >

                          Đặt khám
                        </a>
                      </p>

                    </CardBody>

                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="detailclinic" >
                        <img
                          alt="..."
                          src="https://phongkhamthuyvinhlocvet.com/uploads/source/dich-vu/15.png"
                          style={{ width: "200px", height: "210px" }}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="detailclinic" >
                        <div className="author">
                          <CardTitle tag="h3">Loại bệnh 3</CardTitle>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        <a type="button" class="btn btn-primary"
                        >

                          Đặt khám
                        </a>
                      </p>

                    </CardBody>

                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="detailclinic" >
                        <img
                          alt="..."
                          src="https://phongkhamthuyvinhlocvet.com/uploads/source/dich-vu/15.png"
                          style={{ width: "200px", height: "210px" }}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="detailclinic" >
                        <div className="author">
                          <CardTitle tag="h3">Loại bệnh 2</CardTitle>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        <a type="button" class="btn btn-primary"
                        >

                          Đặt khám
                        </a>
                      </p>

                    </CardBody>

                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="detailclinic" >
                        <img
                          alt="..."
                          src="https://phongkhamthuyvinhlocvet.com/uploads/source/dich-vu/15.png"
                          style={{ width: "200px", height: "210px" }}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="detailclinic" >
                        <div className="author">
                          <CardTitle tag="h3">Loại bệnh 1</CardTitle>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        <a type="button" class="btn btn-primary"
                        >

                          Đặt khám
                        </a>
                      </p>

                    </CardBody>

                  </Card>
                </Col>
                  </Row>
                </Container>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      </div>
    </>
  );
}

export default LandingPage;
