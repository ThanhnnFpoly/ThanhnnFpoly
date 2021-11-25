
import React from "react";
import { Container } from "reactstrap";
function ClientNavbar() {
  return (
    <div style={{backgroundImage:"url" + "(" + "https://thumbs.dreamstime.com/z/bright-seamless-pattern-cute-cartoon-pets-colorful-cats-dogs-green-background-beautiful-illustration-funny-kittens-61634356.jpg" +")"}}>
   <Container >
     <nav style={{textAlign:'left'}}>
    <div className="navbar-translate">
      <li class="nav-item">
      <a   class="nav-link"
          href="/"
        title="Pet'Doctor">
          <p>
          <h1 style={{color:"white",fontVariant:"small-caps",fontFamily:"Sofia, cursive"}}>
        Pet'Health
        </h1>
        </p>
      </a>
      </li>
    </div>
    </nav>
  <nav class="nav justify-content-end"  >
    
      {/* <nav class="nav"> */}
        <li  class="nav-item">
          <a  class="nav-link"
            title="Clinic"
            href="/clinic">
            <p>
            <h3 style={{color:"snow",fontVariant:"small-caps",fontFamily:"Georgia"}}>
        Clinic
        </h3>
        </p>
          </a>
        </li>
        <li class="nav-item">
          <a  class="nav-link"
            title="Doctor"
            href="/doctor">
            <p>
              <h3 style={{color:"snow",fontVariant:"small-caps",fontFamily:"Georgia"}}>
          Doctor
          </h3>
          </p>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            title="diseases"
            href="/diseases" >
              <p>
              <h3 style={{color:"snow",fontVariant:"small-caps",fontFamily:"Georgia"}}>
          Diseases
          </h3>
          </p>
          </a>
        </li >
        <li class="nav-item">
          <p>
          <button type="button" class="btn btn-danger"
            href="/register">
            Log In
          </button>
          </p>
        </li>
      </nav>
{/* </nav> */}
</Container>
</div>
  );
}

export default ClientNavbar;
