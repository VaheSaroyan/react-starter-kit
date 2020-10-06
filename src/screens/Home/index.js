import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "api/auth";


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
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Home;
