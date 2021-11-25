import { NavLink } from "react-router-dom";

function Sidebar() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const logOut = () => {
    sessionStorage.removeItem("user");
  };

  return (
    <div>
      <nav id="mainnav-container">
        <div id="mainnav">
          <div id="mainnav-shortcut">
            <ul className="list-unstyled">
              <li className="col-xs-4" data-content="Additional Sidebar">
                <span id="demo-toggle-aside" className="shortcut-grid" href="#">
                  <i className="fa fa-magic" />
                </span>
              </li>
              <li className="col-xs-4" data-content="Notification">
                <span id="demo-alert" className="shortcut-grid" href="#">
                  <i className="fa fa-bullhorn" />
                </span>
              </li>
              <li className="col-xs-4" data-content="Page Alerts">
                <span id="demo-page-alert" className="shortcut-grid" href="#">
                  <i className="fa fa-bell" />
                </span>
              </li>
            </ul>
          </div>
          <div id="mainnav-menu-wrap" className="">
            <div className="nano">
              <div className="nano-content">
                <ul id="mainnav-menu" className="list-group">
                  <li className="list-divider" />
                  {/*Category name*/}
                  <li className="list-header" style={{ fontSize: "15px" }}>
                    {/* Hello , {user.username} */}
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <NavLink to="/admin/doctor">
                      <i className="fa fa-users fa-2x" />
                      <span className="menu-title">Quản lý Bác sĩ</span>
                      <span className="label label-success pull-right">
                        Top
                      </span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/admin/suporter">
                      <i className="fa fa-file-text fa-2x" />
                      <span className="menu-title">Quản lý Nhân viên</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/admin/newschedule">
                      <i className="fa fa-picture-o fa-2x" />
                      <span className="menu-title">Thêm lịch trình</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/admin/clinic">
                      <i className="fa fa-file-video-o fa-2x" />
                      <span className="menu-title">Quản lý phòng khám</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/admin/schedule">
                      <i className="fa fa-money fa-2x" />
                      <span className="menu-title">Quản lý Phiếu Đặt</span>
                    </NavLink>
                  </li>
                  <li>
                  <NavLink to="/admin/sick">
                      <i className="fa fa-file-audio-o fa-2x" />
                      <span className="menu-title">Quản lý bệnh</span>
                    </NavLink>
                    </li>

                  <li>
                    <a onClick={logOut} href="/login">
                      <i className="fa fa-sign-out fa-2x" />
                      <span className="menu-title">Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
