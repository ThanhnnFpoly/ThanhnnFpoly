
import React from "react";

import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav credits ml-auto">
            <ul>
              <li>
                <p target="_blank">
                  Contact: 098902934
                </p>
              </li>
              <li>
                <p
                  target="_blank"
                >
                  pethealth@gmail.com
                </p>
              </li>
            </ul>
            <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Pet'Health Team
            </span>
          </div>
          </nav>
        
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
