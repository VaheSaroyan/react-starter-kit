import React from "react";
import { logout } from "../../store/reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { username, password, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  return (
    <div>
      Home
      <h1>{username}</h1>
      <h2>{password}</h2>
      {isAuthenticated && <h3>Authenticated</h3>}
      <Link to="/welcome">welcome</Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Home;
