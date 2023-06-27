import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            From sleek and stylish wireless options to high-fidelity
            studio-grade cans, each product in our selection has been carefully
            selected for its exceptional sound reproduction, comfort, and
            durability. Explore our site, immerse yourself in a world of
            immersive audio, and let the music transport you to another
            dimension.
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Kalyanpur Rd, Aazad Nangar , Kanpur , U.P. , 206289
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0476 321 6120</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: buzzstore@gmail.com</div>
          </div>
        </div>

        <div className="col">
          <span className="title">Categories</span>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <span className="title">Pages</span>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            BUZZ STORE 2023 CREATED BY DEEPANSHU RAJPUT. PREMIUM E-COMMERCE
            SOLUTIONS.
          </div>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
