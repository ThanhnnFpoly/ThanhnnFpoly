
import React from "react";

// reactstrap components

// core components
import IndexHeader from "components/headers/IndexHeader.js";
import DemoFooter from "components/footer/ClientFooter.js";
import ClientNavbar from "components/navbars/ClientNavbar.js";
import LandingPage from "./LandingPage.js"

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
      <ClientNavbar />
      <IndexHeader />
      <div className="main">
        <LandingPage/>
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
