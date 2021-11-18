import LoginLayout from "layout/LoginLayout";
import ClinicLogic from "page/logic/admin/ClinicLogic";
import DashboardLogic from "page/logic/admin/DashboardLogic";
import DoctorLogic from "page/logic/admin/DoctorLogic";
import NewScheduleLogic from "page/logic/admin/NewScheduleLogic";
import ScheduleLogic from "page/logic/admin/ScheduleLogic";
import SickerLogic from "page/logic/admin/SickerLogic";
import SuporterLogic from "page/logic/admin/SuporterLogic";
import LoginLogic from "page/logic/guest/LoginLogic";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect ,
  useParams
} from "react-router-dom";
import Index from "./page/views/viewguest/Index.js";
import AdminLayout from "layout/AdminLayout";
import DetailDiseases from "page/views/viewguest/DetailDiseases";
import ProfilePage from "page/views/viewguest/ProfilePage";
import Login from "page/views/viewguest/Login";
import LandingPage from "page/views/viewguest/LandingPage";
import Booking from "page/views/viewguest/Booking";
import Doctor from "page/views/viewguest/Doctor";
import Clinic from "page/views/viewguest/Clinic";
import Diseases from "page/views/viewguest/Diseases";
import DetailClinic from "page/views/viewguest/DetailClinic";

function Routers() {
return (
    <Router>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/index"  render={(props) => <Index {...props} />}/>
      <Route path="/detail"  render={(props) => <DetailDiseases {...props} />} />
      <Route path="/profile"render={(props) => <ProfilePage {...props} />}/>
      <Route path="/login"render={(props) => <Login {...props} />} />
      <Route path="/landing" render={(props) => <LandingPage {...props} />}/>
      <Route path="/booking"render={(props) => <Booking {...props} />} /> 
      <Route path="/doctor"render={(props) => <Doctor {...props} />}/>
      <Route path="/clinic"render={(props) => <Clinic {...props} />} />
      <Route path="/diseases"render={(props) => <Diseases {...props} />}/>
      <Route path="/detailclinic"render={(props) => <DetailClinic {...props} />} />
      <Redirect from="/" to="/index" />
      </Switch>
  </Router>,
  <Router>
      <Switch>
          <PrivateRoute component={() => <HomeLayout>
              <Switch>
                  <DashboardLogic exact path="/admin/dashboard" />
                  <SickerLogic exact path="/admin/sicker" />
                  <ClinicLogic exact path="/admin/clinic" />
                  <ScheduleLogic exact path="/admin/schedule" />
                  <NewScheduleLogic exact path="/admin/newschedule" />
                  <DoctorLogic exact path="/admin/dortor"/>
                  <SuporterLogic exact path="/admin/suporter"/>
              </Switch>
          </HomeLayout>} path="/admin/:path?/:path?/:path?/:path?/:path?">

          </PrivateRoute>

          <Route>
              <LoginLayout>
                  <Switch>
                      <LoginLogic exact path="/" />
                      <LoginLogic exact path="/login" />
                      
                  </Switch>
              </LoginLayout>
          </Route>
      </Switch>
  </Router>
);
          }

function PrivateRoute({ component: Component, ...rest }) {
return (
  <Route
      {...rest}
      render={props => (
          authentication.isAuthentication() ?
              (<Component {...props} />)
              :
              (<Redirect to="/login" />)
      )}
  />
)
}
export default Routers;
