import React from "react";
// reactstrap components
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
          <h3> Địa chỉ:</h3>
      <p className="description">
          <b>
      Bệnh viện có nhiều cổng, bệnh nhân đến khám sẽ đến cổng: 
      Số 16 - 18 Phủ Doãn, Hoàn Kiếm, Hà Nội
</b> </p>
         
          <h3> Thời gian làm việc</h3>
          <br/>
      <p className="description">
  <h6>    Sáng: 7h00 - 12h00 </h6>
      <br/>
      <h6>Chiều: 13h30 - 16h30</h6> <br/>
      <b>
Phòng khám 1 là một trong 5 phòng khám tuyến Trung ương, hạng đặc biệt của Việt Nam. Bệnh viện có lịch sử trên 100 năm, bề dày truyền thống danh tiếng, là cái nôi của ngành ngoại khoa Việt Nam gắn liền với những thành tựu Y học quan trọng của đất nước. 

Việt Đức là địa chỉ uy tín hàng đầu về ngoại khoa, tiến hành khám bệnh, chữa bệnh và thực hiện các kỹ thuật chụp chiếu, xét nghiệm, thăm dò chức năng cơ bản và chuyên sâu hàng ngày cho người dân. 

Bệnh viện có đội ngũ y bác sĩ hùng hậu, nhiều người kiêm là cán bộ giảng dạy tại Đại học Y khoa Hà Nội hoặc Khoa Y Dược - Đại học Quốc gia Hà Nội. Trong số họ nhiều người là chuyên gia đầu ngành và bác sĩ giàu kinh nghiệm ở các chuyên khoa khác nhau. 
            </b>
              </p>
          
          
          <h3> Lưu ý quan trọng</h3>
      <p className="description">
          <b>
          <br/>
       - Bệnh viện có nhiều khu khám bệnh, do đó để thuận tiện và tiết kiệm thời gian khi đi khám, người bệnh nên tìm hiểu kĩ về vị trí khu khám bệnh của mình trước khi đi khám.
<br/><br/> - Bệnh viện Hữu nghị Việt Đức là bệnh viện chuyên về Ngoại khoa, vì vậy, lịch các bác sĩ thường linh động và ưu tiên khám cho các ca cấp cứu.
<br/>
<br/> - Người bệnh nên chủ động chuẩn bị một số câu hỏi liên quan đến tình trạng của mình trước khi đi khám để hành trình khám bệnh được hiệu quả hơn.
              </b>
              </p>
              <h3> Thế mạnh chuyên môn</h3>
           {/* //   <h4>Bác sĩ khám và điều trị:</h4> */}
      <p className="description">
          <b>
        n trứng cá: mụn viêm, bọc, nang, mụn đầu trắng, đâu đen
        Nám, sạm da: nám, sạm da mặt <br/>
        Rụng tóc, da dầu: mụn trứng cá, sẹo lồi, sẹo thâm, sẹo mụn
        Mề đay: tóc gàu, vảy, rụng tóc từng phần, lan tỏa<br/>
        Viêm da cơ địa: mảng da đỏ, ngứa nhiều, từng cơn<br/>
        Viêm da dị ứng: mẩn đỏ da, ngứa, lan tỏa<br/>
        Thủy đậu: mụn nước, ngứa, kèm sốt nhẹ, mệt mỏi<br/>
        Zona: mang mụn nước, 1 bên người, đau nhức<br/>
        Da nhờn, lỗ chân lông to<br/>
        Vảy nến: mảng đổ da, tróc vảy, có thể toàn thân<br/>
        Ghẻ ngứa: ngứa về đêm, vùng nếp, kẽ ngón tay, ngón chân<br/>
        Rạn da: da đùi, da rạn teo, bụng, nếp bẹn, nách, lưng<br/>
        Lão hóa da: da đổi màu, nhão, xệ, nến nhăn, sần<br/>
        Da đồi mồi: đốm nâu<br/>
        Pemphigus: bóng nước thân mình, niêm mạc<br/>
        Lupus ban đỏ: hồng ban cánh bướm mặt, đau nhức mỏi cơ xương khớp
        Xơ cứng bì: da cứng, không đều màu<br/>
        Nấm da: da đỏ quằn quện, các vùng da, tóc, nếp da<br/>
        Viêm da tiếp xúc: da đỏ, rát, nhạy cảm, tiếp xúc kiến ba khoang
        Viêm da do nhiễm Corticoid, nhạy cảm: da đỏ, giãn mạch, mãng, nhạy cảm, nôi mụn
        Nấm móng<br/>
        Các bệnh lý da khác và bệnh lây qua đường quan hệ tình dục (STDs)
             </b> </p>
              <br/>
          
          </Col>
  </div> 

    );
}
export default AsideProfile;