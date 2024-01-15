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
import rings from "../../assets/images/Homepage/rings.svg";
import phone from "../../assets/images/Homepage/phone.svg";
import istqb from "../../assets/images/Homepage/istqb.svg";
import council from "../../assets/images/Homepage/council.svg";
import counseling from "../../assets/images/Homepage/counseling.svg";
import interview from "../../assets/images/Homepage/interview.svg";
import writers from "../../assets/images/Homepage/writers.svg";
import transition from "../../assets/images/Homepage/transition.svg";
import line from "../../assets/images/Homepage/line.svg";

// import { coursedata } from "./Data";

const Home = () => {
  return (
    <div>
      <div className="hero1">
        <div className="hero_left">
          <h1>
            Acquire tech skills through
            <br /> experiential learning.
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
        <h4>Trained Alumni that working in these companies</h4>
        <img src={companies} />
      </div>
      <div className="hero3">
        <h2>Choose a Course</h2>
        <p>
          Strengthen your employability with the tech skills and experience
          <br />
          required to succeed on the job.
        </p>
        <Carousel items={items} />
      </div>
      <div className="hero4">
        <h2>Not Sure Where to Begin</h2>
        <p>
          If you are unsure about which path to take, book a session with our
          <br />
          professional career coach for any career advice or support.
        </p>
        <div className="card_container">
          <div className="card2">
            <img src={counseling} height="230rem" />
            <h4>
              Career <br />
              Counseling
            </h4>
            <p>
              Our Expert Counsellors Provides Personalised
              <br />
              Career Guidiance And Advice To Help You Make
              <br />
              Informed Choices.
            </p>
            <div className="home_btns">
              <button className="card_btn">
                <a href="https://www.careerco.ca/booking/?v=707f3a40153b" target="blank">Book a session</a>
              </button>
              <button className="btn2">
                <a>Take a quiz</a>
              </button>
            </div>
          </div>
          <div className="card2">
            <img src={interview} height="230rem" />
            <h4>
              Prepare For Your Next
              <br /> Interview
            </h4>
            <p>
              Build your confidence and gain effective
              <br /> interview strategies to communicate your values
              <br /> and impress potential employers.
            </p>
            <div className="card_btn_ctn">
              <button className="card_btn">
                <a href="https://www.careerco.ca/booking/?v=707f3a40153b" target="blank">Book a spot</a>
              </button>
            </div>
          </div>
          <div className="card2">
            <img src={writers} height="230rem" />
            <h4>
              Craft Standout Resume <br />
              With Our Writers
            </h4>
            <p>
              Craft resume that highlight your skills, your
              <br />
              experience, and achievements. Stand out from the
              <br />
              crowd and make a lasting impression.
            </p>
            <div className="card_btn_ctn">
              <button className="card_btn">
                <a href="https://www.careerco.ca/booking/?v=707f3a40153b" target="blank">Book a spot</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero5">
        <div className="hero5_left">
          <h1>
            We Assist Immigrant &<br /> Individuals In Navigating
            <br /> The Job Market.
          </h1>
          <p>
            We understand the unique challenges faced by new immigrants in
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
        <div className="hero5_background">
          <img src={rings} width="30%" className="hero5_rings" />
          <img src={phone} width="40%" className="hero5_phone" />
        </div>
      </div>
      <div className="hero6">
        <div className="hero6_left">
          <h1>
            Transition Into a Tech <br />
            Career Of Interest Easily
          </h1>
          <p>
            We offer a wide range of courses and programs tailored to your
            specific interests, helping you acquire
            <br />
            the expertise and confidence to pursue your desired career path and
            make a successful transition.
          </p>
          <img src={transition} className="hero6_img"/>
        </div>
        <div className="hero6_background">
          <img src={line} className="hero6_line"/>
          <img src={line} className="hero6_line2"/>
        </div>
      </div>
      <div className="hero7">
        <div className="hero7_container">
          <div className="hero7_top">
            <h1>Authorized Certification</h1>
            <p>
              Our certification courses are self-placed and well articulated,
              with practice questions and <br />
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
    </div>
  );
};

export default Home;
