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

function Diseases() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 400) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="section text-center"
        data-parallax={true}
         ref={pageHeader}
       >
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
                              require("assets/img/poodle.jpg")
                                .default
                            }
                          />
                        </a>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Benh duong ruot</h4>
                        <Button className="btn-link" color="danger" href="/detail">
                          Chi tiet benh
                        </Button>
                        
                      </div>
                    </div>
                    </Card>
                  </Col>
                 
                 
                  </Row>
                  </Container>
      </div>
    </>
  );
}

export default Diseases;