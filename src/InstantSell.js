import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const InstantSell = () => {
  return (
    <>
      <Navbar />
      <div className="contain">
        <div className="inside">
          <p className="wel">Buy/Sell Instantly</p>
          <div className="flex-7">
            <div className="dig" id="">
              <Link to="/buys" className="buin">
                Buy
              </Link>
            </div>
            <div className="dig" id="active">
              <Link to="/sell" className="buin">
                Sell
              </Link>
            </div>
          </div>
          <div className="form">
            <form action="">
              <h3>Coin to sell</h3>

              <select name="Coins" id="coins">
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="LTC">Litecoin (LTC)</option>
                <option value="DOGE">Dogecoin (DOGE)</option>
              </select>

              <h3>Currency</h3>

              <select name="Coins" id="coins">
                <option value="NGN">Naira (NGN)</option>
                <option value="USD">US Dollars (USD)</option>
                <option value="GBP">Pound Sterling (GBP)</option>
                <option value="EUR">Euro (EUR)</option>
              </select>

              <h3>Quantity</h3>
              <input type="value" placeholder="Input amount" />
            </form>
          </div>
          <div>
            <button className="psign">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstantSell;
