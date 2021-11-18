
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
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
            "url(" + require("assets/img/theme1.jfif").default + ")",
            borderBottom:"1px solid", borderTop:"1px solid"  
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
         >
        <Container>
          <div className="motto text-dark text-center">
            <h1>Our Service</h1>
            <h3>Find out the clinit and doctor you want.</h3>
            <br />
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
