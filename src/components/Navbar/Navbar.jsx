import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import circle from "../../assets/images/navigation/circle.png";
import careerco from "../../assets/images/navigation/logo.svg";
import search from "../../assets/images/navigation/search.svg";

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
        <img src={circle} width="3%" height="3%" className="circle"/>
        <p>
          Discover your career path here{" "}
          <span className="topbluespan">Take a Quiz</span>
        </p>
      </div>
      <div>
        <div>
          <div className="navbardesktop">
            <div className="careerco">
              <Link to="/">
                <img src={careerco} />
              </Link>
              <div>
                <img src={search}  className="search_logo"/>
                <input
                  className="search_course"
                  type="text"
                  placeholder="search courses"
                />
              </div>
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

              <div className="">
                <button className="join">
                  <Link target="blank" to="https://www.eventbrite.ca/e/it-consulting-intro-to-business-analysisproject-mgtscrum-masterqadata-tickets-674367289717">Join a webinar</Link>
                </button>
              </div>
            </nav>
          </div>

          <div className="navbarmobile">
            <div className="mobiletop">
              <Link to="/Hero">
                <img src={careerco} className="mobile_logo" />
              </Link>
              <div onClick={toggleImage} className="">
                {isImage1Visible ? <GiHamburgerMenu /> : <GrClose />}
              </div>
            </div>

            <div className="mobilebottom" id="mobilebottom">
              <div className="mobile-btn-cnt">
                <button className="join">
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
