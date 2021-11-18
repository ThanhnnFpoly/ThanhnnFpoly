import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function ClinicHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/theme7.jpg").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <Container>
          <div className="motto text-center">
            <h1>Bệnh viêm dạ dày - Đường ruột</h1>
            <br />
          </div>
        </Container>
      </div>
    </>
  );
}

export default ClinicHeader;