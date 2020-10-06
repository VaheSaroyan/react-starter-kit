import React from "react";

export default function (ComposedClass) {
  return class AutoLogout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        warningTime: 1000 * 60 * 60,
        signOutTime: 1000 * 60 * 60,
        events: [
          "load",
          "mousemove",
          "mousedown",
          "click",
          "scroll",
          "keypress",
        ],
      };
    }

    componentDidMount() {
      this.state.events.forEach((item) => {
        window.addEventListener(item, this.resetTimeout);
      });

      this.setTimeout();
    }

    clearTimeoutFunc = () => {
      if (this.warnTimeout) clearTimeout(this.warnTimeout);

      if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
    };

    setTimeout = () => {
      this.warnTimeout = setTimeout(this.warn, this.state.warningTime);
      this.logoutTimeout = setTimeout(this.logout, this.state.signOutTime);
    };

    resetTimeout = () => {
      this.clearTimeoutFunc();
      this.setTimeout();
      sessionStorage.setItem("last_activity", new Date());
    };

    warn = () => {
      // window.alert("You will be logged out automatically in 1 minute")
      console.log("You will be logged out automatically in 1 minute.");
    };

    logout = () => {
      // Send a logout request to the API
      console.log("Sending a logout request to the API...");
      localStorage.clear();
      this.destroy();
    };

    destroy = () => {
      // clear the session
      // browserHistory.push('/');
      window.location.assign("/");
    };
    componentWillUnmount() {
      this.state.events.forEach((item) => {
        window.removeEventListener(item, this.resetTimeout);
      });
    }

    render() {
      return <ComposedClass {...this.props} />;
    }
  };
}
