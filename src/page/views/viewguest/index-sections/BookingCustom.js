import React from "react";
import Datetime from 'react-datetime';
// reactstrap components
import {
  Form,
  Input,
  Row,
  Col,
  Label,
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
            src={require("assets/img/faces/bs3.jpg").default}
          /> 
        </div>
      </Col>
      <br/>
      <Col >
      <a href="/profile">
      <h4 className="title">
            <b>Bác sĩ 1</b>
          </h4>
          </a>
          <h6 className="title">Địa chỉ khám: 123 trung hòa Cầu giấy Hà Nội
          </h6>
          <h6 className="title">
          Thời gian: 10:00 AM
          </h6>
          </Col>
      
        <Col className="ml-auto mr-auto" md="10">
         
        <h3 className="text-center">Thông tin chủ nhân</h3>
        <Form className="contact-form">
          <Row>
            <Col md="6">
              <label>Name</label>
                <Input placeholder="Name" type="text" />           
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
            <Col md="6">
              <label>Gender</label>
              <br/>
              <br/>
              <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            </Col>
           
            <Col md="6">
              <label>Birthday</label>
                <Datetime />
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