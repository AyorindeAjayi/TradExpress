import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="contain">
        <div className="inside">
          <p className="wel">Welcome Back!</p>

          <div className="form">
            <form action="">
              <input type="text" placeholder="Username" className="nnn" />
              <input type="password" placeholder="Password" className="nnn" />
            </form>
          </div>
          <div className="flex--">
            <p className="below">Remember me</p>
            <p className="tands">Forgot Password?</p>
          </div>
          <div>
            <button className="psign">Log In</button>
          </div>
          <p className="">
            New User?{" "}
            <Link to="/getstarted" className="tands">
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
