import React from 'react';
import './App.css';
import netflixlogo from "../src/assets/image/Netflix-Logo.wine.svg";
import backgrdimg from "../src/assets/image/bg.jpg";
import tv from "../src/assets/image/1.png";
import vdo from "../src/assets/video/vdo1.m4v";
import vdotwo from "../src/assets/video/video2.m4v";
import str from "../src/assets/image/str.jpg";
import tvmob from "../src/assets/image/2.png";
import child from "../src/assets/image/3.png";
import plus from "../src/assets/image/plus.png";


function App() {
  return (
    <div>
      <div className="main">
      <img className="bgimg" src={backgrdimg} alt="Netflix Logo" />
        <div className="box"></div>
        <div className="txt">
          <h1 className="h">Unlimited movies, TV shows and more</h1>
          <p className="h1">Watch anywhere. Cancel anytime.</p>
          <h3 className="h2">Ready to watch? Enter your email to create or restart your membership.</h3>
          <input className="emailad" type="text" placeholder="Email address" />
          <button className="getstrt">Get Started</button>
        </div>

        <div className="signin">
          <select>
            <option className='bgcoloroption' value="english" selected>
              English
            </option>
            <option className='bgcoloroption' value="hindi">Hindi</option>
          </select>
          <button>Sign In</button>
        </div>
        <div className="logo">
          <img className="logoimg1" src={netflixlogo} alt="Netflix Logo" />
        </div>
      </div>

      {/* Cards Section */}
      <section className="firstcard">
        <p className="headtxt1">Enjoy on your TV</p>
        <p className="headtxt2">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, <br/>Apple TV, Blu-ray players and more.
        </p>
        <img className="img1" src={tv} alt="TV Experience" />
        <video  muted autoPlay loop className="vdo1" >
        <source src={vdo} type="video/mp4" />
        
      </video>
      </section>

      <section className="secondcard">
        <p className="headtxt3">Download your shows <br /> to watch offline</p>
        <p className="headtxt4">
          Save your favourites easily and always have something to watch.
        </p>
        <img className="img2" src={str} alt="Download Shows" />
      </section>

      <section className="thirdcard">
        <p className="headtxt5">Watch everywhere</p>
        <p className="headtxt6">
          Stream unlimited movies and TV shows on your phone,<br/> tablet, laptop, and TV.
        </p>
        <img className="img3" src={tvmob} alt="Watch Everywhere" />
        <video  muted autoPlay loop className="vdo2" >
        <source src={vdotwo} type="video/mp4" />
        
      </video>
      </section>

      <section className="forthcard">
        <p className="headtxt7">Create profiles for kids</p>
        <p className="headtxt8">
          Send children on adventures with their favourite characters in a space made just for them—free with your
          membership.
        </p>
        <img className="img4" src={child} alt="Kids Profiles" />
      </section>

      <div className="fifthcard">
        <p className="headtxt9">Frequently Asked Questions</p>
      </div>

      <div className="faq">
        <div className="faq1">
          <p className="headtxt10">What is Netflix?</p>
          <img className="plussign1" src={plus} alt="Expand FAQ" />
        </div>
        <div className="faq1">
          <p className="headtxt10">How much does Netflix cost?</p>
          <img className="plussign2" src={plus} alt="Expand FAQ" />
        </div>
        <div className="faq1">
          <p className="headtxt10">Where can I watch?</p>
          <img className="plussign3"src={plus} alt="Expand FAQ" />
        </div>
        <div className="faq1">
          <p className="headtxt10">How do I cancel?</p>
          <img className="plussign4" src={plus} alt="Expand FAQ" />
        </div>
        <div className="faq1">
          <p className="headtxt10">What can I watch on Netflix?</p>
          <img className="plussign5" src={plus} alt="Expand FAQ" />
        </div>
        <div className="faq1">
          <p className="headtxt10">Is Netflix good for kids?</p>
          <img className="plussign6" src={plus} alt="Expand FAQ" />
        </div>
      </div>

      <p className="txt11">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="footemail">
        <input className="emailad1" type="text" placeholder="Email address" />
        <button className="getstrt1">Get Started</button>
      </div>

      <footer className="footer">
        <ul className="ul1">
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Speed Test</a>
          </li>
        </ul>
        <ul className="ul2">
          <li>
            <a href="#">Help Centre</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
        </ul>
        <ul className="ul3">
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Ways to Watch</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
          <li>
            <a href="#">Only on Netflix</a>
          </li>
        </ul>
        <ul className="ul4">
          <li>
            <a href="#">Media Centre</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
