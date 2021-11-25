
import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

//import ClientNavbar from "";
//import ClientFooter from "components/Footer/clientFooter";


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
      {/* <ClientNavbar /> */}
      {/* <AsideProfile/> */}
      <div className="section ">
        <Container>
          <Row style={{ borderBottom: "1px solid" }}>
            <Col sm="1">
              <div style={{ height: "200px", width: "220px" }}>
                <img
                  // style={{height:"200px",width:"220px"}}
                  src="https://uploads-ssl.webflow.com/5c9b3541cccd3ec837a90d1c/5f439073ac06493bde689db2_phong-kham-da-khoa-hung-thinh-dia-chi-380-xa-dan.jpg"
                />
              </div>

            </Col>

            <Col>
              <div style={{ textAlign: "center" }}>
                <h2 >
                  Phòng khám 1
                </h2>
                <br />
                <h3><b>Địa chỉ: 123 Cầu giấy, Hà Nội, Việt Nam</b></h3>
              </div>
              <br />

            </Col>
          </Row>
          <br />
          <Row style={{ borderBottom: "1px solid", borderColor:"silver" }}>
            <div >
              <Col md="6" style={{ textAlign: "center" }}>
                <div>
                  <h2>
                    Bác sĩ 1
                  </h2>
                  <br />
                  <div>
                    <h3>Chọn Ngày khám: </h3>
                    <br />
                    <select class="form-select col-sm-12" aria-label="Default select example">
                      <option selected value="1">Thusday 25/11/2021</option>
                      <option value="2">Friday 26/11/2021</option>
                      <option value="3">Satuday 27/11/2021</option>
                    </select>
                  </div>
                </div>
                <br/><br/><br/>
                <div class="col-sm-12 text-center">
                <a type="button" class="btn btn-info"> 7:00-8:00</a> {" "}
                <a type="button" class="btn btn-info"> 8:00-9:00</a> {" "}
                <a type="button" class="btn btn-info"> 9:00-10:00</a>{" "}
                <a type="button" class="btn btn-info"> 10:00-11:00</a>{" "}
                <br/> <br/>
                
                <a type="button" class="btn btn-info"> 14:00-15:00</a>{" "}
                <a type="button" class="btn btn-info"> 15:00-16:00</a>{" "}
                <a type="button" class="btn btn-info"> 16:00-17:00</a>{" "}
                
                </div>
                <br />
              </Col>
              <img
                 style={{ height: "250px", width: "260px" }}
                src="https://lh3.googleusercontent.com/proxy/HJPfu8tOTGplhA9_rm_LsvQgjXs71NtLz_AAJkj3x_g6iDZipCxw8RBcCQY6-bjpvjx96WVbX25z3SYx1axh8g-iFKtZovKX5zQawXEJ5JSZ_SHOFp2F3BTfMYKcY0kvZw"
              />
                 <p> Gia tien: 50USD </p>
            </div>
          </Row>
          <br/>
          <Row style={{ borderBottom: "1px solid", borderColor:"silver" }}>
            <div >
              <Col md="6" style={{ textAlign: "center" }}>
                <div>
                  <h2>
                    Bác sĩ 2
                  </h2>
                  <br />
                  <div>
                    <h3>Chọn Ngày khám: </h3>
                    <br />
                    <select class="form-select col-sm-12" aria-label="Default select example">
                      <option selected value="1">Thusday 25/11/2021</option>
                      <option value="2">Friday 26/11/2021</option>
                      <option value="3">Satuday 27/11/2021</option>
                    </select>
                  </div>
                </div>
                <br/><br/><br/>
                <div class="col-sm-12 text-center">
                <a type="button" class="btn btn-info"> 7:00-8:00</a> {" "}
                <a type="button" class="btn btn-info"> 8:00-9:00</a> {" "}
                <a type="button" class="btn btn-info"> 9:00-10:00</a>{" "}
                <a type="button" class="btn btn-info"> 10:00-11:00</a>{" "}
                <br/> <br/>
                
                <a type="button" class="btn btn-info"> 14:00-15:00</a>{" "}
                <a type="button" class="btn btn-info"> 15:00-16:00</a>{" "}
                <a type="button" class="btn btn-info"> 16:00-17:00</a>{" "}
                
                </div>
                <br />
              </Col>
              <img
                style={{ height: "250px", width: "260px" }}
                src="https://tamanhhospital.vn/wp-content/uploads/2020/12/avt-bac-si-thanh-xuan.png"
              />
                 <p> Gia tien: 50USD </p>
            </div>
          </Row>
          <br/>
          <Row style={{ borderBottom: "1px solid", borderColor:"silver" }}>
            <div >
              <Col md="6" style={{ textAlign: "center" }}>
                <div>
                  <h2>
                    Bác sĩ 3
                  </h2>
                  <br />
                  <div>
                    <h3>Chọn Ngày khám: </h3>
                    <br />
                    <select class="form-select col-sm-12" aria-label="Default select example">
                      <option selected value="1">Thusday 25/11/2021</option>
                      <option value="2">Friday 26/11/2021</option>
                      <option value="3">Satuday 27/11/2021</option>
                    </select>
                  </div>
                </div>
                <br/><br/><br/>
                <div class="col-sm-12 text-center">
                <a type="button" class="btn btn-info"> 7:00-8:00</a> {" "}
                <a type="button" class="btn btn-info"> 8:00-9:00</a> {" "}
                <a type="button" class="btn btn-info"> 9:00-10:00</a>{" "}
                <a type="button" class="btn btn-info"> 10:00-11:00</a>{" "}
                <br/> <br/>
                
                <a type="button" class="btn btn-info"> 14:00-15:00</a>{" "}
                <a type="button" class="btn btn-info"> 15:00-16:00</a>{" "}
                <a type="button" class="btn btn-info"> 16:00-17:00</a>{" "}
                
                </div>
                <br />
              </Col>
              <img
                 style={{ height: "250px", width: "260px" }}
                src="https://tamanhhospital.vn/wp-content/uploads/2021/03/giao-su-tran-quan-anh.jpg"
              />
                 <p> Gia tien: 50USD </p>
            </div>
          </Row>
        </Container>
      </div>
      {/* <ClientFooter /> */}
    </>
  );
}

export default DetailClinic;
