
class Model {
  constructor(props ) {
    this.initialize(props);
  }

  initialize(props) {
    this.id = (props.id && Number(props.id)) || null;
  }

  toJson() {
    return Object.assign({}, this);
  }
}

export default Model;
