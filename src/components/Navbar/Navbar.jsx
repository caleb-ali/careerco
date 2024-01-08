import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import circle from "../../assets/images/navigation/circle.png";

const Navbar = () => {
  const [isImage1Visible, setIsImage1Visible] = useState(true);

  const toggleImage = () => {
    setIsImage1Visible((prevState) => !prevState);

    var x = document.getElementById("mobilebottom");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  return (
    <div>
      <div className="topblue">
        <img src={circle} width="3%" height="3%" />
        <p>
          Discover your career path here{" "}
          <span className="topbluespan">Take a Quiz</span>
        </p>
      </div>
      <div>
        <div>
          <div className="navbardesktop">
            <div>
              <Link to="/Hero">
                <img />
              </Link>
            </div>
            <nav className="navigationdesktop">
              <div>
                <ul className="navbar_menu_desktop">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link to="/aboutme">About me</Link>
                  </li>
                  <li>
                    <Link to="/contactus">Contact us</Link>
                  </li>
                </ul>
              </div>

              <div className="button_container_desktops">
                <button className="navbarsignin">
                  <Link to="/join">Join for free</Link>
                </button>
              </div>
            </nav>
          </div>

          <div className="navbarmobile">
            <div className="mobiletop">
              <Link to="/Hero">
                <img  className="mobile_logo" />
              </Link>
              <div onClick={toggleImage} className="">
                {isImage1Visible ? <GiHamburgerMenu /> : <GrClose />}
              </div>
            </div>

            <div className="mobilebottom" id="mobilebottom">
              <div className="mobile-btn-cnt">
              <button className="navbarsignin">
                  <Link to="/join">Join for free</Link>
                </button>
              </div>

              <ul className="navmenu">
                <li className="mobnavigations">
                  <Link to="/">Home</Link>
                </li>
                <li className="mobnavigations">
                  <Link to="/courses">Courses</Link>
                </li>
                <li className="mobnavigations">
                  <Link to="/aboutme">About me</Link>
                </li>
                <li className="mobnavigations">
                  <Link to="/contactus">Contact us</Link>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
