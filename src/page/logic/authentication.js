class Authentication {
  constructor() {}

  isAuthentication() {
    let accessToken = null;
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      accessToken = user.accessToken;
    }

    return accessToken !== null;
  }
}

const authentication = new Authentication();
export { authentication };
