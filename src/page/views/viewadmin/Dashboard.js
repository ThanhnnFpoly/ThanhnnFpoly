import React from "react";
import Date from 'react-datetime';
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {

  Container,
  Row,
  Col,

} from "reactstrap";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
function Dashboard() {
  return (
    <>
      <Container>
        <Row>
        <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-album-2"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tổng số lịch đặt hôm nay</p>
                      <Card.Title as="h4"><b>123 lịch đặt</b></Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <a href="#"><h6>Xem chi tiết</h6> </a>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tổng ca bệnh đã xử lý hôm qua</p>
                      <Card.Title as="h4"><b> 100 ca khám </b></Card.Title>
                    </div>
                  </Col>
                  
                </Row>
              </Card.Body>
              
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <a href="#"><h6>Xem chi tiết</h6> </a>
                </div>
              </Card.Footer>
            </Card>
            </Col>
            <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bulb-63 text-info"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tổng số lịch đặt cho ngày mai</p>
                      <Card.Title as="h4"><b> 23 ca khám </b></Card.Title>
                    </div>
                  </Col>
                </Row>
                
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <a href="#"><h6>Xem chi tiết</h6> </a>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-ambulance text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tổng số ca khám cho 2 ngày sau</p>
                      <Card.Title as="h4"> <b>1 ca khám</b></Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <a href="#"><h6>Xem chi tiết</h6> </a>
                </div>
              </Card.Footer>
            </Card>
          </Col>
       
          </Row>
          <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Sơ đồ</Card.Title>
                <p className="card-category">Thời gian đặt khám</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "8:00 AM",
                        "9:00 AM",
                        "10:00 PM",
                        "11:00 PM",
                        "2:00 PM",
                        "3:00 PM",
                        "4:00 PM",
                        "5:00 PM",
                      ],
                      series: [
                        [3, 8, 2, 1, 5, 6, 4, 6],

                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 10,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Sơ đồ lịch khám theo ngày theo từng mốc thời gian
                </div>
                <hr></hr>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
      </Container>
    </>
  );
}

export default Dashboard;
