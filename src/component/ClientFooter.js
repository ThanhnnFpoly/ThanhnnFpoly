
import React from "react";

import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    // <footer className="footer footer-black footer-white">
    <div style={{backgroundImage:"url" + 
    "(" + "https://thumbs.dreamstime.com/z/bright-seamless-pattern-cute-cartoon-pets-colorful-cats-dogs-green-background-beautiful-illustration-funny-kittens-61634356.jpg" +")"}}>
      <Container>
        <nav class="nav justify-content-center">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a  class="nav-link disabled" >
                  <p style={{color:"white"}}>
                  Contact: 098902934
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  disabled">
                <p style={{color:"white"}} >
                  pethealth@gmail.com
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a  class="nav-link  disabled" >
                <p style={{color:"white"}}>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Pet'Health Team
              </p>
              </a>
              </li>
            </ul>
            {/* <div className="credits ml-auto"> */}
           
           
           
          {/* </div> */}
          </nav>
        
        
      </Container>
      </div>
    // </footer>
    
  );
}

export default DemoFooter;
