import ClientFooter from "../component/ClientFooter";
import ClientNavbar from "../component/ClientNavbar";

const IndexLayout = (props) =>{
    return(
        <>
        <div>
            <ClientNavbar/>
            <div className="boxed ">
          <div id="content-container" className="bg-light">
            <main>{props.children}</main>
          </div>
        </div>
            <ClientFooter/>
        </div>
        </>
    );
};
export default IndexLayout;