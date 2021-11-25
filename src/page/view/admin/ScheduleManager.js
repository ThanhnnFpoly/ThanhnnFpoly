
import React from "react";
import Table from 'react-bootstrap/Table';
import { BiPlus } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import { GoPencil } from "react-icons/go";
import { useState } from 'react';
// react-bootstrap components
import {
    Container,
  Button,
    li,
    a,
    Nav,
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
    <br />
      <br />
      <br />
        <div class="panel-heading">
          <h2 style={{ fontWeight: "bold" }}>Dasboard / Quản lý lịch trình khám</h2>
        </div>
      <Container fluid>
        <Row>
          <Col>
            {' '}  
              <Col md="6">
              <h4> <b>Thời gian: </b></h4>
              <br/>
              <td>  <Input type="date" />  </td> {'   '}
            <td>   <button type="button" class="btn btn-primary">TÌm kiếm</button></td>
             </Col>
           
            <br/>
            <br/>
            <br/>
            <div
        className="modal"
        id="add-author"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="demo-default-modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md ">
          <div className="modal-content">
            {/*Modal header*/}
            <div className="modal-header">
              <button data-dismiss="modal" className="close" type="button">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">Thông tin ca khám:</h4>
            </div>
            {/*Modal body*/}
            <div className="row mar-all ">
              <div className="col-sm-12">
                <form onSubmit>
                  <div className="panel-body ">
                    
                    <div className="col-sm-12">
                    <h3><b> - Thông tin người đặt :</b> </h3>
                    <br/>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Họ tên chủ pet: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Họ tên . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Bác sĩ chịu trách nghiệm: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Bác sĩ . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Thời gian khám: </label>
                        <input
                          name="title"
                          onChange
                          type="date"
                          className="form-control "
                          disabled
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Ngày khám: </label>
                        <input
                          name="title"
                          onChange
                          type="date"
                          className="form-control "
                          disabled
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Email: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Email . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Địa chỉ: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Địa chỉ . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Số điện thoại: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Số điện thoại . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label"> </label>
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label"> </label>
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label"> </label>
                      </div>
                      
                      <h3><b>- Thông tin thú cưng:</b></h3>
                      <br/>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Tên thú cưng: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="Tên . . ."
                          className="form-control "
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Giống: </label>
                        <input
                          name="title"
                          onChange
                          type="text"
                          placeholder="giống . . ."
                          className="form-control col-sm-6 "
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Giới tính</label>
                        <select
                          name="type"
                          onChange
                          id="type"
                          className="form-control col-sm-6"
                          onClick
                          required
                        >
                         
                          <option value={false} default>
                            0 - đực
                          </option>
                          <option value={true}>1 - cái </option>
                        </select>
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Sinh nhật: </label>
                        <input
                          name="title"
                          onChange
                          type="date"
                          className="form-control "
                          disabled
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Tình trạng bệnh: </label>
                        <div class="form-floating">
                                <textarea class="form-control" 
                                placeholder="Tình trạng bệnh" id="floatingTextarea2" 
                                style={{height: "70px"}}>

                                </textarea>
                               
                              </div>
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="control-label">Chi tiết: </label>
                        <div class="form-floating">
                        <input
                          name="title"
                          onChange
                          type="file"
                          className="form-control "
                          
                        />  
                          </div>
                         
                      </div>
                      <div className="form-group col-sm-12">
                        <label className="control-label">Note: </label>
                        <div class="form-floating">
                                <textarea class="form-control" placeholder="Note"
                                 id="floatingTextarea2" style={{height: "70px"}}></textarea>
                                
                              </div>
                      </div>
                     
                      
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/*Modal footer*/}
            
            <div className="modal-footer">
            <button
                id="closeModal"
                data-dismiss="modal"
                onClick
                type="submit"
                className="btn btn-info mar-lft"
                      >
                        Thêm
                      </button>
              <button
                data-dismiss="modal"
                className="btn btn-default"
                type="button"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      </div>
          </Col>
          <br/>
          <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <li>
                      <a
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}>
                        Add new patient
                      </a>
                    </li>
                    <li>
                      <a 
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Need Confirmation
                      </a>
                    </li>
                    <li>
                      <a data-target="#add-author"
          data-toggle="modal"
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Confirmed
                      </a>
                    </li>
                    <li>
                      <a
                        className={activeTab === "4" ? "active" : ""}
                        onClick={() => {
                          toggle("4");
                        }}
                      >
                        Cancel
                      </a>
                    </li>
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
                <a type="button" class="btn btn-info" style={{ marginRight: "10px" }} data-target="#add-author"
          data-toggle="modal">TIếp nhận</a>
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
