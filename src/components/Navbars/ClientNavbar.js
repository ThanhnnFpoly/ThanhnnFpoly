//import ProfilePage from "views/examples/ProfilePage";
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  UncontrolledCollapse,
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function ClientNavbar() {
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (

  <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
  <Container>
    <div className="navbar-translate">
      <NavbarBrand
        data-placement="bottom"
          href="/index"
          target="_blank"
        title="Pet'Doctor"
      >
        Pet'Health
      </NavbarBrand>
      <button
        aria-expanded={navbarCollapse}
        className={classnames("navbar-toggler navbar-toggler", {
          toggled: navbarCollapse,
        })}
        onClick={toggleNavbarCollapse}
      >
        <span className="navbar-toggler-bar bar1" />
        <span className="navbar-toggler-bar bar2" />
        <span className="navbar-toggler-bar bar3" />
      </button>
    </div>
    <Collapse
      className="justify-content-end"
      navbar
      isOpen={navbarCollapse}
    >
      <Nav navbar>
        <NavItem>
          <NavLink
            data-placement="bottom"
            target="_blank"
            title="Clinic"
            href="/clinic"
          >
        Clinic
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            data-placement="bottom"
            target="_blank"
            title="Doctor"
            href="/doctor"
          >
            
Doctor
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            data-placement="bottom"
            target="_blank"
            title="diseases"
            href="/diseases" >

          Diseases

            
          </NavLink>
        </NavItem>
        <NavItem>
          <Button
            className="btn-round"
            color="danger"
            target="_blank"
            href="/register"
          >
            Log In
          </Button>
        </NavItem>
      </Nav>
    </Collapse>
  </Container>
</Navbar>
  );
}

export default ClientNavbar;
