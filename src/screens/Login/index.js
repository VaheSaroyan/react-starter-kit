import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/user";
import "./index.scss";

const Login = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const validate = () =>
    !!(userData.username.length && userData.password.length);

  return (
    <div className="Login">
      <h1 className="Login__header">Login</h1>
      <label htmlFor="username">username</label>
      <input
        type="text"
        className="Login__input"
        value={userData.username}
        onChange={handleChange}
        name="username"
        id="username"
        style={!validate() ? { borderColor: "red" } : null}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        className="Login__input"
        value={userData.password}
        onChange={handleChange}
        name="password"
        id="password"
        style={!validate() ? { borderColor: "red" } : null}
      />
      <button
        onClick={() => (validate() ? dispatch(login(userData)) : null)}
        className="Login__submit"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
