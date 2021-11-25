
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
   
    Row,
    Col,
    Input
} from "reactstrap";
function NewSchedule() {

   
  return (
    <>
    <br />
      <br />
      <br />
        <div class="panel-heading">
          <h2 style={{ fontWeight: "bold" }}>Thêm mới lịch trình:</h2>
        </div>
      <Container className="section">
        <Row >
        
        <Col  md="6">
            <h4> <b>Select Date: </b></h4>
            <Input type="date"/>
            
        </Col>
        <Col md="4">
            <h4><b> Doctor: </b></h4>
            <Input  type="type" disabled/>
            
        </Col>
       
        <br/>
        <br/>
        <br/>
        <br/>
        <Row>
        <h4><b>Select time Period:</b></h4>
        <br/>
        <br/>
            <Col className="text-center">
        <button type="button" class="btn btn-primary">8:00AM - 9:00AM</button> {' '}
        <button type="button" class="btn btn-primary">9:00AM - 10:00AM</button> {' '}
        <button type="button" class="btn btn-primary">10:00AM - 11:00AM</button> {' '}
        <button type="button" class="btn btn-primary">2:00PM - 3:00PM</button> {' '}
        <button type="button" class="btn btn-primary">3:00PM - 4:00PM</button> {' '}
        <button type="button" class="btn btn-primary">4:00PM - 5:00PM</button> {' '}
        </Col>

       
        </Row>
        
        <Col>
        <br/>
        <br/>
        <table class="table">
            <thead>
                <tr>
                    <th> Range</th>
                    <th> Date</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12:00 AM</td>
                    <td>18/11/2021</td>
                </tr>
            </tbody>
            <tfoot>
              <tr>
                <td> </td>
                <td>
                  <button type="submit" class="btn btn-success"> Xác nhận</button> {' '}
                <button type="submit" class="btn btn-danger">Hoàn tác</button>
                </td>
              </tr>
            </tfoot>
        </table>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewSchedule;
