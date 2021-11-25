import React from "react";
// reactstrap components
import {
  Form,
  Row,
  Col,

} from "reactstrap";

function BookingPet() {
  return (
    <Col className="ml-auto mr-auto" md="10" sm="12">
      <h3 className="text-center">Thông tin thú cưng</h3>
      <Form className="contact-form">
        <Row>
          <Col md="6">
            <label>Tên thú cưng</label>
            

              <input type="text" class="form-control" placeholder="Tên thú cưng" />
            
          </Col>
          <Col md="6">
            <label>Giống loài</label>
            

              <input type="text" class="form-control" placeholder="" />
            
          </Col>
          <Col md="6">
           
            <div class="form-group col-md-4">
            <label>Giới tính</label>
              <select id="inputState" class="form-control">
                <option selected>Đực</option>
                <option>Cái</option>
              </select>
            </div>
          </Col>
          <Col md="6">
            <label>Birthday</label>
            
              <input type="date" class="form-control" />
            
          </Col>
        </Row>
        <Row>
          <label>Tình trạng của thú cưng</label>
          <textarea class="form-control" rows="3"></textarea>
          <label>More infomation:</label>
          <input type="file" name="file" id="exampleFile" />
        </Row>

      </Form>
    </Col>

  );
}
export default BookingPet;