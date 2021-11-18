import React from "react";
import Datetime from 'react-datetime';
// reactstrap components
import {
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  Label,
  FormGroup,
} from "reactstrap";

function BookingPet()
{
    return(
        <Col className="ml-auto mr-auto" md="10" sm="12">
        <h3 className="text-center">Thông tin thú cưng</h3>
        <Form className="contact-form">
          <Row>
            <Col md="6">
              <label>Tên thú cưng</label>
              <InputGroup>
               
                <Input  type="text" />
              </InputGroup>
            </Col>
            <Col md="6">
              <label>Giống loài</label>
              <InputGroup>
                
                <Input placeholder="" type="text" />
              </InputGroup>
            </Col>
            <Col md="6">
              <label>Giới tính</label>
              <InputGroup>
              <FormGroup check>
               <Label check> 
               <Input name="radio1" type="radio"/>
               Đực
               </Label>
               </FormGroup>
               <FormGroup check>
               <Label check> 
               <Input name="radio1" type="radio"/>
               Cái
               </Label>
               </FormGroup>
              </InputGroup>
            </Col>
            <Col md="6">
              <label>Birthday</label>
              <InputGroup>
                <Datetime />
              </InputGroup>
            </Col>
          </Row>
          <Row>
          <label>Tình trạng của thú cưng</label>
          <Input 
            
            type="textarea"
            rows="4"
          />
          <Label>More infomation:</Label>
          <Input type="file" name="file" id="exampleFile" />
          </Row>
         
        </Form>
      </Col>

    );
}
export default BookingPet;