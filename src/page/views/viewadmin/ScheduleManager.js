
import React from "react";
import Table from 'react-bootstrap/Table';
import { BiPlus } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import { GoPencil } from "react-icons/go";
import { useState } from 'react';
import Datetime from "react-datetime"
// react-bootstrap components
import {
    Container,
  Button,
    NavItem,
    NavLink,
    Nav,
    InputGroup,
    FormGroup ,
    Label ,
    Form,
    TabContent,
    TabPane,
    Row,
    Col,
    Modal,
    Input
} from "reactstrap";
function ScheduleManager() {
    const [activeTab, setActiveTab] = React.useState("1");
    const toggle = (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <h5>Dasboard / Quản lý lịch trình khám</h5>
      <Container fluid>
        <Row>
          <Col>
              <h5> Thời gian:</h5>
              <Col md="6">
              <td>  <Input type="date" />  </td> {'   '}
            <td>   <Button class="btn btn-info">TÌm kiếm</Button></td>
             </Col>
           
            <br/>
            <br/>
            <br/>
            <Modal ml="12" size="lg" isOpen={modal} toggle={toggleModal}>
            
            <div className="modal-header">
            <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h3
                    className="modal-title text-center"
                  >
                   <b> Thông tin ca khám </b>
                  </h3>
            </div>
            <div className="modal-body">
      <Col >
          </Col>
      
        <Col className="ml-auto mr-auto" md="10">
        
        <Form className="contact-form">
          <Row>
              <h6>Basic Info: </h6>
            <Col md="6">
              <label>Name</label>
                <Input placeholder="Name" type="text" />           
            </Col>
            <Col md="6">
              <label>Doctor</label>
                <Input type="text" disabled/>           
            </Col>
            
            <Col md="6">
              <label>Ngày</label>
                <Input type="text" disabled />           
            </Col>
            <Col md="6">
              <label>Thời gian</label>
                <Input type="text" disabled/>           
            </Col>
            <Col md="6">
              <label>Email</label>
                <Input placeholder="Email" type="text" />
            </Col>
            <Col md="6">
              <label>Address</label>
                <Input placeholder="Address" type="text" />
            </Col>
            <Col md="4">
              <label>Phone</label>
                <Input placeholder="+84" type="text" />
            </Col>
            

          </Row>
          <br/>
         <Row> 
         <h6>Extra Info:</h6>
         <Col md="6">
              <label> Pet'Name</label>
                <Input placeholder="Name" type="text" />           
            </Col>
            <Col md="6">
              <label>Giống</label>
                <Input type="text" />           
            </Col>
            <Col md="6">
              <label>Gender</label>
                <Input type="text" />           
            </Col>
            <Col md="6">
              <label>Birthday</label>
                <Input type="date" />           
            </Col>
            <Col md="6">
              <label>Diseases of Pet:</label>
                <Input type="textarea" />           
            </Col>
            <Col md="6">
              <label>More infomation:</label>
                <Input type="textarea" />           
            </Col>
            <Col className="md-auto">
              <label>Note:</label>
                <Input type="text" />           
            </Col>
         </Row>
         <div className="text-center">
         
         <Button className="btn btn-warning">Confirm</Button>
         {'  '}
         <Button className="btn btn-danger">Cancel</Button>
        </div>
        </Form>
        
      </Col>
      
            </div>
                
            </Modal>
          </Col>
          <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Add new patient
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Need Confirmation
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Confirmed
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "4" ? "active" : ""}
                        onClick={() => {
                          toggle("4");
                        }}
                      >
                        Cancel
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                  <p>
                  <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id-tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Update</th>
                <th>Điều chỉnh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>
                <a type="button" class="btn btn-info" style={{ marginRight: "10px" }} >TIếp nhận</a>
                  <a type="button" class="btn btn-danger" style={{ marginRight: "10px" }}>Hủy</a>
                </td>
              </tr>
            </tbody>
          </Table>
                  </p>
                </TabPane>
                <TabPane tabId="2">
                <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id-tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Update</th>
                <th>Điều chỉnh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>
                <a type="button" class="btn btn-warning" style={{ marginRight: "10px" }}  onClick={toggleModal} >Confirm</a>
                  <a type="button" class="btn btn-danger" style={{ marginRight: "10px" }}>Hủy</a>
                </td>
              </tr>
            </tbody>
          </Table>
                </TabPane>
                <TabPane tabId="3">
                    <Col>
                <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id-tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Update</th>
                <th>Điều chỉnh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>
                <a type="button" class="btn btn-info" style={{ marginRight: "10px" }} onClick={toggleModal} >Thông tin</a>
                </td>
              </tr>
            </tbody>
          </Table>
          </Col>
                </TabPane>
                <TabPane tabId="4">
                <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id-tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Update</th>
                <th>Điều chỉnh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>
                  <a type="button" class="btn btn-danger" style={{ marginRight: "10px" }}>Hủy</a>
                </td>
              </tr>
            </tbody>
          </Table>
                </TabPane>
              </TabContent>
         
          <div>


          </div>
          
        </Row>
      </Container>
    </>
  );
}

export default ScheduleManager;
