
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
function NewSchedule() {

   
  return (
    <>
      <h4>Thêm mới lịch trình</h4>
      <Container className="section">
        <Row >
        
        <Col  md="6">
            <h6>Select Date:</h6>
            <Input type="date"/>
            
        </Col>
        <Col md="6">
            <h6 >Doctor:</h6>
            <Input  type="type" disabled/>
            
        </Col>
        <br/>
        <br/>
        <br/>
        <br/>
        <Row>
        <h6><b>Select time Period:</b></h6>
        <br/>
        <br/>
            <Col className="text-center">
        <Button id="button" value="8:00AM-9:00AM">8:00AM - 9:00AM</Button> {' '}
        <Button id="button" value="9:00AM-10:00AM">9:00AM - 10:00AM</Button> {' '}
        <Button id="button" value="10:00AM-11:00AM">10:00AM - 11:00AM</Button> {' '}
        <Button id="button" value="2:00PM-3:00PM">2:00PM - 3:00PM</Button> {' '}
        <Button id="button" value="3:00PM-4:00PM">3:00PM - 4:00PM</Button> {' '}
        <Button id="button" value="4:00PM-5:00PM">4:00PM - 5:00PM</Button> {' '}
        </Col>

       
        </Row>
        
        <Col>
        <br/>
        <br/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th> Range</th>
                    <th> Date</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td  hidden="true">8:00AM - 9:00AM</td>
                    <td> </td>
                </tr>
                <tr hidden="true">
                    <td>9:00AM - 10:00AM</td>
                    <td> </td>
                </tr>
                <tr>
                    <td  hidden="true">10:00AM - 11:00AM</td>
                    <td> </td>
                </tr>
                <tr>
                    <td  hidden="true">2:00PM - 3:00PM</td>
                    <td> </td>
                </tr>
                <tr>
                    <td  hidden="true">3:00PM - 4:00PM</td>
                    <td> </td>
                </tr>
                <tr>
                    <td hidden="true">4:00PM - 5:00PM</td>
                    <td> </td>
                </tr>
            </tbody>
        </Table>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewSchedule;
