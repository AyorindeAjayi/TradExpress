import React from "react";
import "./Individual.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Individual = () => {
  return (
    <>
      <Navbar />

      <div className="contain">
        <div className="inside">
          <p className="wel">Welcome!</p>
          <div className="flex-7">
            <div className="dig" id="active">
              <Link to="/getstarted" className="buin">
                Individual
              </Link>
            </div>
            <div className="dig">
              <Link to="/business" className="buin">
                Business
              </Link>
            </div>
          </div>
          <div className="form">
            <form action="">
              <input type="text" placeholder="Username" className="nnn" />
              <input type="text" placeholder="Full Name" className="nnn" />
              <input type="text" placeholder="Email" className="nnn" />
              <input type="text" placeholder="Phone Number" className="nnn" />
              <input
                type="text"
                placeholder="Referral Code (optional)"
                className="nnn"
              />
            </form>
          </div>
          <p className="below">
            By clicking the Sign Up button below, you agree to <br />{" "}
            TradExpress <span className="tands">terms and service</span>
          </p>
          <div>
            <Link to="/activate">
              <button className="psign">Sign Up</button>
            </Link>
          </div>
          <p className="">
            Already have an account ?{" "}
            <Link to="/login" className="tands">
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Individual;
