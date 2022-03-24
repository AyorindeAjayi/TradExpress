import React from "react";
import Navbar from "./Navbar";
import mail from "./images/mailing.svg";

const Activation = () => {
  return (
    <>
      <Navbar />
      <div className="contain">
        <div className="inside">
          <p className="wel">You Are Almost In!</p>
          <h2>Welcome Nino</h2>
          <img src={mail} alt="" />
          <br />
          <p>
            An activation link has been sent to{" "}
            <span className="tands">nino9484foryou@gmail.com</span> <br />{" "}
            Please click on the link to verify your email and <br /> activate
            your TradExpress account.
          </p>
          <div>
            <button className="psign">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activation;
