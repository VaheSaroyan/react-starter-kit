import Model from "./";

class User extends Model {
  constructor(props = {}) {
    super(props);

    this.initialize(props);
  }

  initialize(props) {
    super.initialize(props);
    this.username = props.username || "";
  }
}

export default User;
