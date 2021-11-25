
import React from "react";

// import DemoFooter from "components/footer/ClientFooter.js";
// import ClientNavbar from "components/navbars/ClientNavbar.js";
import LandingPage from "./LandingPage"

// index sections


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      {/* <ClientNavbar /> */}
      <div className="main">
        <LandingPage/>
        {/* <DemoFooter /> */}
      </div>
    </>
  );
}

export default Index;
