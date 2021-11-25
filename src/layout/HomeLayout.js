import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

const HomeLayout = (props) => {
  return (
    <>
      <div id="container" className="effect mainnav-lg">
        <Navbar />
        <div className="boxed ">
          <div id="content-container" className="bg-light">
            <main>{props.children}</main>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default HomeLayout;
