
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/476281.png").default + ")",
        }}
      >
        {/* <div className="filter" /> */}
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Pet'Health</h1>

            </div>
            <h2 className="presentation-subtitle text-center" style={{color:"black"}}>
              The best care of your pet !
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
