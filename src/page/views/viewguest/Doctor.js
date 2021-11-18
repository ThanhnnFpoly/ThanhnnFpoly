import React from "react";
import ClientNavbar from "components/navbars/ClientNavbar.js";
import {
    Button,
    Card,
    Container,
    Row,
    Col,
  } from "reactstrap";
import axios from "axios";
  import Pagination from "react-js-pagination";
  import DoctorHeader from "components/headers/DoctorHeader";
import { error } from "jquery";
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
        <ClientNavbar />
        <DoctorHeader/>
        <div className="main">
        <div className="section text-center">
          <Container>
          <h2 className="title">Danh sach bac si</h2>
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
                    Xương khớp
                    </p>
                    <Button className="btn-link" color="danger" href="/profile">
                      Booking
                    </Button>
                    
                  </div>
                </div>
                </Card>
              </Col>      
              </Row>
              <div className="items-center">
        <Pagination

          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={3}

        />
      </div>
           
              </Container>
              </div>
              
              </div>
              
        </>
    );
}
export default Doctor;