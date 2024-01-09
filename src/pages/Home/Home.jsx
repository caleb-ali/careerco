import React from "react";
import "./Home.css";
import hero from "../../assets/images/Homepage/hero.svg";
import iiba from "../../assets/images/Homepage/iiba.svg";
import companies from "../../assets/images/Homepage/companies.svg";
import agile from "../../assets/images/Homepage/agile.svg";
import apmg from "../../assets/images/Homepage/apmg.svg";
import devops from "../../assets/images/Homepage/devops.svg";
import hero5 from "../../assets/images/Homepage/hero5.svg";
import hero6 from "../../assets/images/Homepage/hero6.svg";
import istqb from "../../assets/images/Homepage/istqb.svg";
import council from "../../assets/images/Homepage/council.svg";

// import { coursedata, startdata } from "./Data";

const Home = () => {
  return (
    <div>
      <div className="hero1">
        <div className="hero_left">
          <h1>
            Learning By Doing Get <br />
            Practical! Get A Job!
          </h1>
          <p>
            We offer diverse courses and guarantee dream job success through
            practical <br />
            work, resume aid, interview prep, and personalized support.
          </p>
          <div className="hero_btn">
            <button className="join">
              <a>Get Started</a>
            </button>
            <button className="btn2">
              <a>Join Webinar</a>
            </button>
          </div>
          <div className="accredited">
            <p>Accredited by </p>
            <img src={iiba} />
            <p>CBAP CCBA ECBA AAC</p>
          </div>
        </div>
        <div>
          <img src={hero} className="hero_image" />
        </div>
      </div>
      <div className="hero2">
        <h4>Trained Alumni that working in these companies</h4>
        <img src={companies} />
      </div>
      <div className="hero3"></div>
      <div className="hero4">
        <h2></h2>
        <p></p>
      </div>
      <div className="hero5">
        <div className="hero5_left">
          <h1>
            We Assist Immigrant & Individuals <br />
            In Navigating The Job Market.
          </h1>
          <p>
            We understand the unique challenges faced by newimmigrants in
            <br />
            finding suitable employment. Ourcomprehensive programs are
            <br />
            designed to equip youwith the skills, knowledge, and connections
            <br />
            necessaryto excel in your chosen field.
          </p>
          <button className="join">
            <a>Read Testimonials</a>
          </button>
        </div>
        <img src={hero5} className="hero5img" />
      </div>
      <div className="hero6">
        <div className="hero6_left">
          <h1>
            Transition Into Your Career <br />
            Of Interest Easily
          </h1>
          <p>
            We offer a wide range of courses and programs tailored to
            <br />
            yourspecific interests, helping you acquire the expertise
            <br />
            andconfidence to pursue your desired career path and
            <br />
            make asuccessful transition.
          </p>
        </div>
        <div>
          <img src={hero6} />
        </div>
      </div>
      <div className="hero7">
        <div className="hero7_top">
          <h1>Authorized Certification</h1>
          <p>
            Our certification courses are self-placed and well articulated, with
            practice questions and <br />
            answers, PDU's and Certifications offered upon completion.
          </p>
        </div>
        <div className="hero7_bottom">
          <img src={apmg} />
          <img src={agile} />
          <img src={devops} />
          <img src={council} />
          <img src={istqb} />
        </div>
      </div>
    </div>
  );
};

export default Home;
