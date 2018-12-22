class Auth {
  constructor() {
    this.authenticated = false;
    this.token = sessionStorage.getItem("jwtToken");
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }
  isAuthenticated() {
    if (this.token !== null) {
      this.authenticated = true;
    }
    return this.authenticated;
  }
}

export default new Auth();
