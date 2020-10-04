import Model from "../internals/Model";

class User extends Model {
  constructor(props) {
    super(props);

    this.initialize(props);
  }

  initialize(props) {
    super.initialize(props);
    this.isAuthenticated = props.isAuthenticated || false;
    this.name = props.name || "";
    this.username = props.username || "";
    this.password = props.password || "";
  }
}

export default User;
