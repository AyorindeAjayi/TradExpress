import React from "react";
import "./Business.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Business = () => {
  return (
    <>
      <Navbar />
      <div className="contain">
        <div className="inside">
          <p className="wel">Welcome!</p>
          <div className="flex-7">
            <div className="dig">
              <Link to="/getstarted" className="buin">
                Individual
              </Link>
            </div>
            <div className="dig" id="active">
              <Link to="/business" className="buin">
                Business
              </Link>
            </div>
          </div>
          <div className="form">
            <form action="">
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Business Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Referral Code (optional)" />
            </form>
          </div>
          <p className="below">
            By clicking the Sign Up button below, you agree to <br />{" "}
            TradExpress <span className="tands">terms and service</span>
          </p>
          <div>
            <Link to="activate">
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

export default Business;
