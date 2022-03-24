import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import appStore from "./images/Group 68.svg";
import playStore from "./images/Group 69.svg";
import first from "./images/Group 28.svg";
import second from "./images/Group 52.svg";
import message from "./images/Union 1.svg";
import quote from "./images/Group 8699.svg";
import facebook from "./images/Icon awesome-facebook.svg";
import telegram from "./images/Icon awesome-telegram.svg";
import twitter from "./images/Icon awesome-twitter.svg";
import whatsapp from "./images/Icon ionic-logo-whatsapp.svg";
import copyright from "./images/Group 78.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="purple">
        <Navbar />
        <p className="buy">
          Buy, sell and manage your <br /> Crypto on TradExpress.
        </p>
        <p className="easy">
          Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.
        </p>
        <Link to="/getstarted">
          <button className="btn-1">Get Started</button>
        </Link>
        <div className="store">
          <img src={appStore} alt="" />
          <img src={playStore} alt="" className="pStore" />
        </div>
      </div>
      <div className="grey">
        <p className="greyP">
          Why do people get involved with Cryptocurrencies?
        </p>
        <div className="containers">
          <div className="container" id="container-1">
            <img src={first} alt="" className="first-1" />
            <p className="mode">Easy Mode of Payment</p>
            <p className="people">
              People can now easily send and receive money from anywhere in the
              world to purchase goods and pay for services.
            </p>
          </div>
          <div className="container" id="container-2">
            <img src={second} alt="" className="first-1" />
            <p className="mode">Financial Freedom</p>
            <p className="people">
              Just like the internet no single entity controls the Crypto
              network which provides users transparency and privacy, which puts
              you in absolute control of your money.
            </p>
          </div>
          <div className="container" id="container-3">
            <img src={first} alt="" className="first-1" />
            <p className="mode">Investment</p>
            <p className="people">
              The constant demand as made Cryptocurrecies a Digital Gold used
              for alternative store of wealth on long term investments.
            </p>
          </div>
        </div>
        <button className="btn-learn">Learn More</button>
        <p className="crypto">
          Buy and Sell your Cryptocurrency in 3 simple steps
        </p>
        <div className="flex">
          <div className="flex2">
            <div className="box">1</div>
            <div>
              <p className="free">Create a free Account</p>
              <p className="wallet">
                Sign up for your free TradExpress Wallet on web, iOS, or Android
                devices and follow our easy process to set up your profile.
              </p>
            </div>
          </div>
          <img src={first} alt="" className="dnone" />
        </div>
        <div className="flex">
          <img src={second} alt="" className="dnone" />
          <div className="flex2">
            <div className="box">2</div>
            <div>
              <p className="free">Deposit</p>
              <p className="wallet">
                Choose your preferred deposit option like bank transfer,
                credit/debit card or send digital asset directly to your wallet
                for easy funding/withdrawal.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex2">
            <div className="box">3</div>
            <div>
              <p className="free">Buy/ Sell Crypto</p>
              <p className="wallet">
                Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your
                wallet or send it easily to friends and family.
              </p>
            </div>
          </div>
          <img src={first} alt="" className="dnone" />
        </div>
        <div className="white">
          <p className="white-1">
            Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?
          </p>
          <p className="white-2">
            Create your account for free and start trading today!
          </p>
          <Link to="getstarted">
            <button className="started">Get Started</button>
          </Link>
          <div className="store">
            <img src={appStore} alt="" />
            <img src={playStore} alt="" className="pStore" />
          </div>
        </div>
        <p className="review">Customer's Review</p>
        <div className="flex-3">
          <div className="message" id="message-1">
            <img src={message} alt="" className="revi" />
            <div className="mes1">
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </p>
            </div>
            <div className="quote-1">
              <img src={quote} alt="" />
            </div>
          </div>
          <div className="message" id="message-2">
            <img src={message} alt="" className="revi" />
            <div className="mes1">
              <p>
                They have the best rate compared to other platforms with fast
                payout.
              </p>
            </div>
            <div className="quote-1">
              <img src={quote} alt="" />
            </div>
          </div>
          <div className="message" id="message-3">
            <img src={message} alt="" className="revi" />
            <div className="mes1">
              <p>
                Easy to fund and withdraw coins or cash on their platform, I
                will definitely trade with them again.
              </p>
            </div>
            <div className="quote-1">
              <img src={quote} alt="" />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="products">
            <p className="plccl">Products</p>
            <p className="bit">
              {" "}
              Bitcoin <br /> Alt <br /> Fiat <br /> Refill <br /> P2P
            </p>
          </div>
          <div className="learn">
            <p className="plccl">Learn</p>
            <p className="bit">
              Blog <br /> Help Center
            </p>
          </div>
          <div className="contact">
            <p className="plccl">Contact</p>
            <p className="bit">
              hello@tradeexpress.com <br /> support@tradeexpress.com
            </p>
            <div className="flex-icons">
              <img src={twitter} alt="" />
              <img src={telegram} alt="" />
              <img src={whatsapp} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
          <div className="company">
            <p className="plccl">Company</p>
            <p className="bit">
              About Us <br /> Careers <br /> Rates <br /> Mobile
            </p>
          </div>
          <div className="legal">
            <p className="plccl">Legal</p>
            <p className="bit">
              Privacy Policy <br />
              Anti-Money Laundering <br />
              Terms and Conditions
            </p>
          </div>
        </div>
        <div className="copyright">
          <img src={copyright} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
