import React from "react";
// reactstrap components
import {
  Form,
  Row,
  Col,
} from "reactstrap";

function BookingCustom(){
    return(
      <>
      <Col md="2" sm="1">
      <Form className="contact-form"> </Form>
      <div className="avatar">
          <img
            alt="..."
            className="img-thumbnail img-responsive"
            src="https://tamanhhospital.vn/wp-content/uploads/2021/03/giao-su-tran-quan-anh.jpg"
          /> 
        </div>
      </Col>
      <br/>
      <Col >
      <a href="/profile">
      <br/>
      <h2 className="title">
            <b>Bác sĩ 1</b>
          </h2>
          </a>
          <br/>
          <h4 className="title"><b>Địa chỉ khám: 123 trung hòa Cầu giấy Hà Nội </b>
          </h4>
          <br/>
          <h4 className="title">
         <b> Thời gian: 10:00-11:00 </b>
          </h4>
          </Col>
      
        <Col className="ml-auto mr-auto" md="10">
         
        <h3 className="text-center">Thông tin chủ nhân</h3>
        <Form className="contact-form">
          <Row>
            <Col md="6">
              <label>Name</label>
                <input placeholder="Name" type="text"  class="form-control" />           
            </Col>
            <Col md="6">
              <label>Email</label>
                <input placeholder="Email" type="text" class="form-control" />
            </Col>
            <Col md="6">
              <label>Address</label>
                <input placeholder="Address" type="text" class="form-control" />
            </Col>
            <Col md="4">
              <label>Phone</label>
                <input placeholder="+84" type="number" class="form-control" />
            </Col>
            <Col md="6">
            <div class="form-group col-md-6">
            <label>Giới tính</label>
              <select id="inputState" class="form-control">
                <option selected>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
            </Col>
           
            <Col md="6">
              <label>Birthday</label>
                <input type="date" class="form-control"/>
            </Col> 
          </Row>
         <Row> 
         </Row>
        </Form>
        
      </Col>
      </>
    );
}
export default BookingCustom;