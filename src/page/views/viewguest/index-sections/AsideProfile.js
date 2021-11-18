import React from "react";
import {
  Button,
  Input,
  Col,
  Modal
} from "reactstrap";

function AsideProfile(){
    const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
    return(
  <div className="section">
      <Col md ="10">
          <h3> Bác sĩ chuyên khoa II Trần Thị Hoài Hương</h3>
      <p className="description">
      Trưởng Khoa Dinh Dưỡng bệnh viện Da Liễu TP. HCM
Bác sĩ Hương có hơn 20 năm kinh nghiệm trong khám và điều trị bệnh lý da liễu
              </p>
         
          <h4> Quá trình công tác</h4>
      <p className="description">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. More importantly, looking at them will give you a picture of
                what you can built with this powerful kit.
              </p>
          
          
          <h4> Quá trình đào tạo</h4>
      <p className="description">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. More importantly, looking at them will give you a picture of
                what you can built with this powerful kit.
              </p>
              <h3> Khám và điều trị</h3>
              <h4>Bác sĩ khám và điều trị:</h4>
      <p className="description">
        n trứng cá: mụn viêm, bọc, nang, mụn đầu trắng, đâu đen
        Nám, sạm da: nám, sạm da mặt
        Rụng tóc, da dầu: mụn trứng cá, sẹo lồi, sẹo thâm, sẹo mụn
        Mề đay: tóc gàu, vảy, rụng tóc từng phần, lan tỏa
        Viêm da cơ địa: mảng da đỏ, ngứa nhiều, từng cơn
        Viêm da dị ứng: mẩn đỏ da, ngứa, lan tỏa
        Thủy đậu: mụn nước, ngứa, kèm sốt nhẹ, mệt mỏi
        Zona: mang mụn nước, 1 bên người, đau nhức
        Da nhờn, lỗ chân lông to
        Vảy nến: mảng đổ da, tróc vảy, có thể toàn thân
        Ghẻ ngứa: ngứa về đêm, vùng nếp, kẽ ngón tay, ngón chân
        Rạn da: da đùi, da rạn teo, bụng, nếp bẹn, nách, lưng
        Lão hóa da: da đổi màu, nhão, xệ, nến nhăn, sần
        Da đồi mồi: đốm nâu
        Pemphigus: bóng nước thân mình, niêm mạc
        Lupus ban đỏ: hồng ban cánh bướm mặt, đau nhức mỏi cơ xương khớp
        Xơ cứng bì: da cứng, không đều màu
        Nấm da: da đỏ quằn quện, các vùng da, tóc, nếp da
        Viêm da tiếp xúc: da đỏ, rát, nhạy cảm, tiếp xúc kiến ba khoang
        Viêm da do nhiễm Corticoid, nhạy cảm: da đỏ, giãn mạch, mãng, nhạy cảm, nôi mụn
        Nấm móng
        Các bệnh lý da khác và bệnh lây qua đường quan hệ tình dục (STDs)
              </p>
              <br/>
            <Col className = "text-center">
              <Button
                 className="btn-link mr-1"
                color="info"
                outline
                
                onClick={toggleModal}
              >
                Đánh Giá
              </Button>
           
              <Modal isOpen={modal} toggle={toggleModal}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Đánh giá bác sĩ
                  </h5>
                </div>
                <div className="modal-body" md="6">
                    <p className="text-danger"> Họ và tên:</p>
                    <Input placeholder="Username"  type="text" />
                    <br/>
                    <p className="text-danger"> Email:</p>
                    <Input placeholder="Email"  type="text" />
                    <br/>
                    <p className="text-danger"> Đánh giá:</p>
                    <Input placeholder="Đánh giá của bạn"  type="textarea" />
                    <br/>
                    <Button className="btn-round text-center" color="info" onClick={toggleModal}>
                  Đánh giá
                </Button>
                </div>
                </Modal>
                </Col>
          </Col>
  </div> 

    );
}
export default AsideProfile;