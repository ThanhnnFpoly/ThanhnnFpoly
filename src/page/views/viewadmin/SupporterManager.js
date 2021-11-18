
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
  Row
} from "react-bootstrap";
import {
  Input,
  Col,
  Modal
} from "reactstrap";
function SupporterManager() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const [modaldetail, setModaldetail] = React.useState(false);
  const toggleModaldetail = () => {
    setModaldetail(!modaldetail);
  };
  return (
    <>
      <h5>Dasboard / Quản lý loại bệnh</h5>
      <Container fluid>
        <Row>
        
          <Col className="">
            <Button type="button" class="btn btn-primary"  onClick={toggleModal}>
              Thêm mới <BiPlus /></Button>
              <br/>
            <br/>
            <br/>
            <Modal  isOpen={modal} toggle={toggleModal}>
            <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
              <h3 className="text-center"><b> Thêm supporter mới</b> </h3>
                <div className="modal-body" md="6">
                <p className="text-info"> <b>Tên supporter: </b></p>
                    <Input placeholder="Username"  type="text" />
                    <br/>
                    <p className="text-info"> <b>Địa chỉ: </b></p>
                    <Input placeholder="Username"  type="text" />
                    <br/>
                    <p className="text-info"> <b>Số điện thoại liên hệ: </b></p>
                    <Input placeholder="Username"  type="text" />
                    <br/>
                    <p className="text-info"> <b>Giới tính: </b></p>
                    <Input placeholder="Username"  type="select">
                      <option value="Male"><p>Nam</p></option>
                      <option value="Female"><p>Nữ</p></option>
                      </Input>
                    <br/>
                    <p className="text-info"> <b>Mô tả: </b></p>
                    <Input placeholder="Username"  type="text" />
                    <br/>
                    <p className="text-info"> <b>Ảnh: </b></p>
                    <Input placeholder="Username"  type="file" />
                    <br/>
                    <br/>
                    <div className="text-center">
                    <Button className="btn-round" variant="primary" onClick={toggleModal} > 
                 Lưu
                </Button>
                {'       '}
                <Button className="btn-round" variant="secondary" onClick={toggleModal}>
                  Bỏ
                </Button>
               

                
                </div>
             </div>
            </Modal>
            <Modal  isOpen={modaldetail} toggle={toggleModaldetail}>
            <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModaldetail}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
              <h3 className="text-center"><b> Chi tiết supporter</b> </h3>
                <div className="modal-body" md="6">
                <p className="text-info"> <b>Tên supporter: </b></p>
                    <Input type="text" />
                    <br/>
                    <p className="text-info"> <b>Địa chỉ: </b></p>
                    <Input  type="text" />
                    <br/>
                    <p className="text-info"> <b>Số điện thoại liên hệ: </b></p>
                    <Input  type="text" />
                    <br/>
                    <p className="text-info"> <b>Giới tính: </b></p>
                    <Input  type="text" />
                    <br/>
                    <p className="text-info"> <b>Ảnh: </b></p>
                    <Input  type="file" />
                    <br/>
                    <br/>
                    <div className="text-center">
                    <Button className="btn-round" variant="primary" onClick={toggleModal} > 
                 Lưu
                </Button>
                {'       '}
                <Button className="btn-round" variant="secondary" onClick={toggleModal}>
                  Bỏ
                </Button>
               

                
                </div>
             </div>
            </Modal>
          </Col>
       
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id </th>
                <th>Tên supporter</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Giới tính</th>
                <th>Ảnh</th>
                <th>Ngày tạo</th>
                <th>Ngày điều chỉnh</th>
                <th>Ngày xóa</th>
                <th>Điều chỉnh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>
                  <a type="button" class="btn btn-danger" style={{ marginRight: "10px" }}>Xóa<GoTrashcan /></a>
                  <a type="button" class="btn btn-secondary" style={{ marginRight: "10px" }}  onClick={toggleModaldetail}>Chi tiết<GoPencil /></a>
                </td>
              </tr>
            </tbody>
          </Table>
          <div>


          </div>
          
        </Row>
      </Container>
    </>
  );
}

export default SupporterManager;
