import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";

function FotgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");

  const onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setEmail(value);

    if (email !== "") {
      setEmailError("");
      setEmailSuccess("");
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let emailReq = "";

    if (validator.isEmail(email)) {
      emailReq = email;
      const url = "https://api.sos.hachinet.com/api/forgot-password";
      const data = {
        email: emailReq,
      };
      axios
        .post(url, data)
        .then((res) => {
          if (res.data.success) {
            const msgSuccess = "メールが送信（そうしん）させました。";
            setEmailSuccess(msgSuccess);
          } else {
            setEmailError(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const validEmail = " このメールアドレスが存在（そんざい）しません。もう一度（いちど）入力（にゅうりょく）してください。";
      setEmailError(validEmail);
    }
  };

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
                SOS <span className="text-thin">管理者</span>
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
                {emailError}
              </span>
              <span
                style={{
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                {emailSuccess}
              </span>
              <p className="pad-btm">
              メールアドレスを入力（にゅうりょく）してください。
              新（あたら）しいパスワードを送信（そうしん）します。
              </p>
              <form onSubmit={onSubmit} action="">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-user" />
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Eメール"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-8">
                    <div className="form-group text-right">
                      <button
                        disabled={email === ""}
                        className="btn btn-success text-uppercase"
                        type="submit"
                      >
                        送信
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="pad-ver">
            <Link to="/login" className="btn-link mar-rgt">
              ログインに戻る
            </Link>
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

export default FotgotPassword;
