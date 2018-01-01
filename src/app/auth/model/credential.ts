class Credential {

  constructor(public token?: string, public login?: string, public password?: string, public role?: string) {
    this.token = token;
    this.login = login;
    this.password = password;
    this.role = role;
  }
}
