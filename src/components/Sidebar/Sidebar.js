import { NavLink } from "react-router-dom";

function Sidebar() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const logOut = () => {
    sessionStorage.removeItem("user");
  };

  return (
    <div>
      {/*MAIN NAVIGATION*/}
      {/*===================================================*/}
      <nav id="mainnav-container">
        <div id="mainnav">
          {/*Shortcut buttons*/}
          {/*================================*/}
          <div id="mainnav-shortcut">
            <ul className="list-unstyled">
              <li className="col-xs-4" data-content="Additional Sidebar">
                <a id="demo-toggle-aside" className="shortcut-grid" href="#">
                  <i className="fa fa-magic" />
                </a>
              </li>
              <li className="col-xs-4" data-content="Notification">
                <a id="demo-alert" className="shortcut-grid" href="#">
                  <i className="fa fa-bullhorn" />
                </a>
              </li>
              <li className="col-xs-4" data-content="Page Alerts">
                <a id="demo-page-alert" className="shortcut-grid" href="#">
                  <i className="fa fa-bell" />
                </a>
              </li>
            </ul>
          </div>
          {/*================================*/}
          {/*End shortcut buttons*/}
          {/*Menu*/}
          {/*================================*/}
          <br />
          <div id="mainnav-menu-wrap" className="">
            <div
              style={{ textAlign: "center", color: "white", fontSize: "17px" }}
            >
              Hello,{user.nickname}
            </div>
            <div className="nano">
              <div className="nano-content">
                <ul id="mainnav-menu" className="list-group">
                  <li className="list-divider" />
                  {/*Category name*/}
                  <li className="list-header">PET HEALTH</li>
                  {/*Menu list item*/}
                  <li>
                    <NavLink to="/admin/dashboard">
                      <i className="fa fa-users fa-2x" />
                      <span className="menu-title">DashBoard</span>
                      <span className="label label-success pull-right">
                        Top
                      </span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/admin/doctor">
                      <i className="fa fa-file-text fa-2x" />
                      <span className="menu-title">Quản lý Bác Sĩ</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/admin/suporter">
                      <i className="fa fa-picture-o fa-2x" />
                      <span className="menu-title">Quản lý Nhân viên</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/admin/newschedule">
                      <i className="fa fa-file-video-o fa-2x" />
                      <span className="menu-title">Thêm lịch trình khám</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/admin/schedule">
                      <i className="fa fa-file-video-o fa-2x" />
                      <span className="menu-title">Lịch trình khám</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/admin/clinic">
                      <i className="fa fa-file-video-o fa-2x" />
                      <span className="menu-title">Quản lý phòng khám</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/admin/sicker">
                      <i className="fa fa-file-video-o fa-2x" />
                      <span className="menu-title">Quản lý loại bệnh</span>
                    </NavLink>
                  </li>

                  <br />
                  <li className="list-header">ログアウト</li>
                  <li>
                    <NavLink onClick={logOut} to="/login">
                      <i className="fa fa-sign-out fa-2x" />
                      <span className="menu-title">ログアウト</span>
                    </NavLink>
                  </li>
                </ul>

                {/*================================*/}
                {/*End widget*/}
              </div>
            </div>
          </div>
          {/*================================*/}
          {/*End menu*/}
        </div>
      </nav>
      {/*===================================================*/}
      {/*END MAIN NAVIGATION*/}
    </div>
  );
}

export default Sidebar;
