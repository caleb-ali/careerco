import React from "react";
import "./Home.css";
import { useState } from "react";
import items from "./items";
import Carousel from "../../components/Carousel/Carousel";
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
import counseling from "../../assets/images/Homepage/counseling.svg";
import interview from "../../assets/images/Homepage/interview.svg";
import writers from "../../assets/images/Homepage/writers.svg";

// import { coursedata } from "./Data";

const Home = () => {
  const [index, setIndex] = useState(0);
  const length = 3;
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

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
              <a>Speak to a Coach</a>
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
        <h2>Trained Alumni that working in these companies</h2>
        <img src={companies} />
      </div>
      <div className="hero3">
        <h2>Our Courses</h2>
        <p>
          Start the Journey to change your career today and standout in today's
          job market
        </p>
        <Carousel items={items} />
      </div>
      <div className="hero4">
        <h2>Not Sure Where to Begin</h2>
        <p>
          Start from these popular and straightforwardcourses that gives you
          access to rich educationalcontents.
        </p>
        <div className="card_container">
          <div className="card2">
            <img src={counseling} />
            <h4>
              Career <br />
              Counseling
            </h4>
            <p>
              Our Expert Counsellors Provides Personalised
              <br />
              Career GuidianceAnd Advice To Help You Make
              <br />
              Informed Choices.
            </p>
            <div className="home_btns">
              <button className="card_btn">
                <a>Speak to a Coach</a>
              </button>
              <button className="card_btn">
                <a>Speak to a Coach</a>
              </button>
            </div>
          </div>
          <div className="card2">
            <img src={interview} />
            <h4>
              Prepare For Your Next
              <br /> Interview
            </h4>
            <p>
              Build your confidence and gain effective interview
              <br />
              strategies to communicate your values and
              <br />
              impress potential employers.
            </p>
            <div className="card_btn_ctn">
              <button className="card_btn">
                <a>Speak to a Coach</a>
              </button>
            </div>
          </div>
          <div className="card2">
            <img src={writers} />
            <h4>
              Craft Standout Resume With
              <br /> Our Writers
            </h4>
            <p>
              Craft resume that highlight your skills,your
              <br />
              experience,and achievements. Stand out from the
              <br />
              crowd and make a lasting impression on potential
              <br />
              employers with a professional resume.
            </p>
            <div className="card_btn_ctn">
              <button className="card_btn">
                <a>Speak to a Coach</a>
              </button>
            </div>
          </div>
        </div>
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
