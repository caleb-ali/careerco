import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import twitter from "../../assets/images/footer/twitter.svg";
import facebook from "../../assets/images/footer/facebook.svg";
import linkedin from "../../assets/images/footer/linkedin.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer_top">
        <div className="top1">
          <div>
            <h4>Join our Newsletter</h4>
            <p>We’ll send you a nice letter once per week. No spam.</p>
          </div>
          <div>
          <input
                  className="enter_email"
                  type="text"
                  placeholder="Enter your email"
                />
           <button className="subscribe">
                  <Link to="/join">Subscribe</Link>
                </button>
          </div>
        </div>
        <div className="top2">
        <div>
          <p>Sitemap</p>
          <div>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Contact Us</Link>
              </li>
              <li>
                <Link to="">All Courses</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <p>Legal</p>
          <ul>
              <li>
                <Link to="">Terms</Link>
              </li>
              <li>
                <Link to="">Privacy</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
        </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div>
          <p>© 2023 Careerco. All rights reserved.</p>
        </div>
        <div className="socials">
          <img src={twitter} width="15%"/>
          <img src={linkedin} width="15%"/>
          <img src={facebook} width="15%"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
