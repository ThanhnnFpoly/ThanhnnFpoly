import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import LoginLayout from "./layout/LoginLayout";
import AccountLogic from "./page/logic/DoctorLogic";
import LoginLogic from "./page/logic/LoginLogic";
import ForgotPasswordLogic from "./page/logic/ForgotPasswordLogic";
import TermsOfUseLogic from "./page/logic/ClinicLogic";
import BannerLogic from "./page/logic/SuporterLogic";
import BackgroundLogic from "./page/logic/NewScheduleLogic";
import FreeLogic from "./page/logic/ScheduleLogic";
import { authentication } from "./page/logic/authentication";
import RecordLogic from "./page/logic/SickerLogic";
import DoctorLogic from "./page/logic/DoctorLogic";
import SuporterLogic from "./page/logic/SuporterLogic";
import NewScheduleLogic from "./page/logic/NewScheduleLogic";
import ClinicLogic from "./page/logic/ClinicLogic";
import ScheduleLogic from "./page/logic/ScheduleLogic";
import SickerLogic from "./page/logic/SickerLogic";

import IndexLayout from "./layout/IndexLayout";
import DetailDiseases from "./page/logic/guest/ViewDetailDiseases";
import ProfilePage from "./page/logic/guest/ViewProfileLogic";
import Booking from "./page/logic/guest/BookingLogic";
import Doctor from "./page/logic/guest/ViewDoctorLogic";
import Clinic from "./page/logic/guest/ViewClinicLogic";
import Diseases from "./page/logic/guest/ViewDiseasesLogic";
import DetailClinic from "./page/logic/guest/ViewDetailClinic";
import IndexLogic from "./page/logic/guest/IndexLogic";
function Routers() {
    return (
        <Router>
            <Switch>
                <Route component={() => <HomeLayout>
                    <Switch>
                        <DoctorLogic exact path="/admin/doctor" />
                        <SuporterLogic exact path="/admin/suporter" />
                        <NewScheduleLogic exact path="/admin/newschedule" />
                        <ClinicLogic exact path="/admin/clinic" />
                        <ScheduleLogic exact path="/admin/schedule" />
                        <SickerLogic exact path="/admin/sick" />
                    </Switch>
                </HomeLayout>} path="/admin/:path?/:path?/:path?/:path?/:path?/:path?">

                </Route>
                

                <Route component={() => <IndexLayout>
                    <Switch>
                        <IndexLogic exact path={"/index","/"}/>
                        <DetailDiseases exact path="/detailsicker" />
                        <ProfilePage exact path="/profile"/>
                        <Booking exact path="/booking"/>
                        <Doctor exact path="/doctor"/>
                        <Clinic exact path="/clinic"/>
                        <Diseases exact path="/diseases"/>
                        <DetailClinic exact path="/detailclinic"/>

                    </Switch>
                    {/* <Redirect to="/index"/> */}
                    </IndexLayout>}>
                </Route>


                <Route>
                    <LoginLayout>
                        <Switch>
                            <LoginLogic exact path="/" />
                            <LoginLogic exact path="/login" />
                            <ForgotPasswordLogic exact path="/fotgot-password" />
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
