import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router";
import validator from "validator";
function Login() {
  const [loginRequest, setLoginRequest] = useState({
    username: "",
    password: "",
  });

  const [msgSuccess, setMsgSuccess] = useState("");
  const [msgError, setMsgError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { username, password } = loginRequest;

    setLoginRequest({
      ...loginRequest,
      [name]: value,
    });

    if (username !== "" || password !== "") {
      setMsgSuccess("");
      setMsgError("");
    }
  };

  const checkLogin = loginRequest.username === "" || loginRequest.password === "";

  const onSubmit = (event) => {
    event.preventDefault();

    const { username, password } = loginRequest;

    const url = "http://localhost:8080/api/auth/signin";
    const usernameTrim = username.trim();

    if (!checkLogin ) {
      const user = {
        username: usernameTrim,
        password,
      };
      axios
        .post(url, user)
        .then((res) => {
          const { data } = res.data;
          console.log(data)
            if (res.data.roles.includes("ROLE_ADMIN")) {
              sessionStorage.setItem("user", JSON.stringify(res.data));
              setIsAdmin(true);
            } 
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setMsgError("このメールアドレスは存在しません。 再入力してください。");
    }
    setLoginRequest({
      ...loginRequest,
      password: "",
    });
  };

  let accessToken = null;
  if (sessionStorage.getItem("user")) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    accessToken = user.accessToken;
  }

  if (accessToken !== null || isAdmin === true) {
    return <Redirect to="/admin/doctor" />;
  } else {
    return (
      <div>
        <div id="container" className="cls-container">
          {/* BACKGROUND IMAGE */}
          {/*===================================================*/}
          <div id="bg-overlay" className="bg-img img-balloon" />
          {/* HEADER */}
          {/*===================================================*/}
          <div className="cls-header cls-header-lg">
            <div className="cls-brand">
              <a className="box-inline" href="">
                {/* <img alt="Nifty Admin" src="img/logo.png" class="brand-icon"> */}
                <span className="brand-title">
                  Pet <span className="text-thin">Heath'</span>
                </span>
              </a>
            </div>
          </div>
          {/*===================================================*/}
          {/* LOGIN FORM */}
          {/*===================================================*/}
          <div className="cls-content">
            <div className="cls-content-sm panel">
              <div className="panel-body">
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {msgError}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "green",
                  }}
                >
                  {msgSuccess}
                </span>
                <p className="pad-btm">Login</p>
                <form onSubmit={onSubmit} action="">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-user" />
                      </div>
                      <input
                        name="username"
                        type="text"
                        className="form-control"
                        placeholder="username"
                        onChange={onChange}
                        value={loginRequest.username}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-asterisk" />
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="password"
                        onChange={onChange}
                        value={loginRequest.password}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="">
                      <div className="form-group">
                        <button
                          className="btn btn-success text-uppercase"
                          type="submit"
                          disabled={checkLogin}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="pad-ver">
              <a href="/fotgot-password" className="btn-link mar-rgt">
                Lấy lại mật khẩu ?
              </a>
            </div>
          </div>
          {/*===================================================*/}
          {/* DEMO PURPOSE ONLY */}
          {/*===================================================*/}

          {/*===================================================*/}
        </div>
      </div>
    );
  }
}

export default Login;
